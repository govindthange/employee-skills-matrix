package org.util.employeeskillsservice.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.model.EmployeeInformation;
import org.util.employeeskillsservice.model.SkillTagEnum;
import org.util.employeeskillsservice.model.Skills;

import com.opencsv.bean.CsvToBeanBuilder;

@Service
public class EmployeeSkillUploaderService {

    public Collection<EmployeeInformation> skillUploader(MultipartFile file) {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            CSVParser csvParser = new CSVParser(reader,
                    CSVFormat.DEFAULT.withFirstRecordAsHeader()
                    .withIgnoreHeaderCase().withTrim());
			Iterable<CSVRecord> csvRecords = csvParser.getRecords();
			Map<Long, List<Skills>> employeeSkillMapping = new HashMap<>();
			Map<String, SkillTagEnum> skillTagMapping = Arrays.asList(SkillTagEnum.values()).stream()
			.collect(Collectors.toMap(SkillTagEnum::getKey, Function.identity()));
			Set<String> questioner = skillTagMapping.keySet();
			for (CSVRecord csvRecord : csvRecords) {
				// to avoid duplicate skill
				Set<String> uniqueSkill = new HashSet<>();
				// pull out all columns of skills
				questioner.forEach(question -> {
					String[] ans = csvRecord.get(question).split(";");
					// create skills w/r to employee
					Arrays.asList(ans).forEach(ski -> {
						if (StringUtils.isNotEmpty(ski) && !uniqueSkill.contains(ski)) {
							uniqueSkill.add(ski);
							Skills skil = new Skills().setSkills(ski)
									.setEmployeeId(Long.parseLong(csvRecord.get("Employee Code")))
									.setSkillTag(skillTagMapping.get(question));
							if (employeeSkillMapping.get(skil.getEmployeeId()) == null) {
								employeeSkillMapping.put(skil.getEmployeeId(), new ArrayList<>());
							}
							employeeSkillMapping.get(skil.getEmployeeId()).add(skil);
						}
					});
				});
			}
			csvParser.close();
			
			List<EmployeeInformation> employesss = new CsvToBeanBuilder(new InputStreamReader(file.getInputStream()))
			.withType(EmployeeInformation.class)
			.build()
			.parse();
            Map<Long, EmployeeInformation> employessIdMapping = employesss.stream().collect(Collectors.toMap(
					EmployeeInformation::getEmployeeCode, Function.identity()));
			// attach the skills to respestive employees.
			employessIdMapping.forEach((key, value) -> {
				value.setSkills(employeeSkillMapping.get(key));
			});
            return employessIdMapping.values();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
