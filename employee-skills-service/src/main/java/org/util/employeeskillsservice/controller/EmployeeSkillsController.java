package org.util.employeeskillsservice.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.model.Employee;
import org.util.employeeskillsservice.service.EmployeeService;
import org.util.employeeskillsservice.utility.BaseResposeEnity;
import org.util.employeeskillsservice.exception.ServiceException;

@RestController
@RequestMapping("/api/employee")
public class EmployeeSkillsController {
    @Autowired
    EmployeeService service;

    private Logger logger = LoggerFactory.getLogger(EmployeeSkillsController.class);

    @PostMapping("/upload-csv")
    public BaseResposeEnity uploadCsv(@RequestParam("file")MultipartFile file) {
       try {
        service.uploadCsvData(file);
        logger.info("Employee Data uploded");
        return  new BaseResposeEnity(HttpStatusCode.valueOf(201), "Employess data uploaded successfully", null);
       } catch(ServiceException e) {
        return new BaseResposeEnity(HttpStatusCode.valueOf(400),"Exception Occurred", e);
       }
    }

    @GetMapping
    public BaseResposeEnity fetchAllEmployee() {
        logger.info("Get All Employees");
        Iterable<Employee> employeeItr = service.fetchAll();
        return  new BaseResposeEnity(HttpStatusCode.valueOf(200), "All employee data", employeeItr);
    }

    @DeleteMapping()
    public BaseResposeEnity deleteAllEmployee() {
        logger.info("Delete All Employees");
        service.deleteAll();
        return  new BaseResposeEnity(HttpStatusCode.valueOf(200), "Employees deleted successfully", null);
    }
}
