package org.util.employeeskillsservice.service;

import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.model.Employee;

import java.util.List;

public interface EmployeeService {
    void saveAll(List<Employee> employees);
    public Iterable<Employee> fetchAll();

    void uploadCsvData(MultipartFile file);
}
