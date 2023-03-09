package org.util.employeeskillsservice.service;

import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.model.Employee;
import org.util.employeeskillsservice.exception.ServiceException;

import java.util.List;

public interface EmployeeService {
    void saveAll(List<Employee> employees);
    public Iterable<Employee> fetchAll();

    void deleteAll();
    void uploadCsvData(MultipartFile file) throws ServiceException;
}
