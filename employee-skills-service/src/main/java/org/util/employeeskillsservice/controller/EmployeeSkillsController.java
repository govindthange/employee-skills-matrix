package org.util.employeeskillsservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.model.Employee;
import org.util.employeeskillsservice.service.EmployeeService;

@RestController
@RequestMapping("/api/employee")
public class EmployeeSkillsController {
    @Autowired
    EmployeeService service;

    @PostMapping("/upload-csv")
    public ResponseEntity uploadCsv(@RequestParam("file")MultipartFile file) {
       service.uploadCsvData(file);
       return new ResponseEntity<>("File upload successfully", HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<Iterable<Employee>> fetchAllEmployee() {
        return new ResponseEntity<>(service.fetchAll(), HttpStatus.OK);
    }
}
