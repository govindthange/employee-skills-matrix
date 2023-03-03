package org.util.employeeskillsservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.CsvParser;
import org.util.employeeskillsservice.model.Employee;
import org.util.employeeskillsservice.repository.EmployeeRepository;

import java.io.IOException;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository repository;

    @Autowired
    CsvParser parser;


    public void saveAll(List<Employee> employees) {
        repository.deleteAll();
        repository.saveAll(employees);
    }

    public Iterable<Employee> fetchAll() {
        return repository.findAll();
    }


    public void uploadCsvData(MultipartFile file) {
        try {
            List<Employee> employees = parser.readCsv(file);
            repository.deleteAll();
            repository.saveAll(employees);
        } catch (IOException e) {
            System.out.println(e);
        }
    }


}
