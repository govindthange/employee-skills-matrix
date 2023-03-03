package org.util.employeeskillsservice;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.model.Employee;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

@Service
public class CsvParser {
    @Autowired
    EmployeeRowParser empParser;

    public List<Employee> readCsv(MultipartFile file) throws IOException {
        try (
                BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
                 CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withFirstRecordAsHeader()
                         .withIgnoreHeaderCase()
                         .withTrim()
             )) {
            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
            empParser.setRow(csvRecords);
            return empParser.parse();
        } catch(Exception ex) {
            System.out.println(ex);
        }
        return null;
    }
}
