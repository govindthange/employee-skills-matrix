package org.util.employeeskillsservice.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.CsvParser;
import org.util.employeeskillsservice.exception.ServiceException;
import org.util.employeeskillsservice.model.Employee;
import org.util.employeeskillsservice.repository.EmployeeRepository;
import org.util.employeeskillsservice.repository.SkillRepository;

import jakarta.transaction.Transactional;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.List;


@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository empRepository;

    @Autowired
    SkillRepository skillRepository;

    @Autowired
    CsvParser parser;

    private Logger logger = LoggerFactory.getLogger(EmployeeServiceImpl.class);

    public void saveAll(List<Employee> employees) {
        empRepository.deleteAll();
        empRepository.flush();

        skillRepository.deleteAll();
        skillRepository.flush();

        empRepository.saveAllAndFlush(employees);
    }

    public Iterable<Employee> fetchAll() {
        return empRepository.findAll();
    }

    public void deleteAll() {
        empRepository.deleteAll();
        empRepository.flush();

        skillRepository.deleteAll();
        skillRepository.flush();
    }


    public void uploadCsvData(MultipartFile file)  throws ServiceException {
        try {
            empRepository.deleteAll();
            empRepository.flush();
            List<Employee> employees = parser.readCsv(file);
            empRepository.saveAllAndFlush(employees);
        } catch (IOException e) {
            throw new ServiceException(e);
        }
    }

}
