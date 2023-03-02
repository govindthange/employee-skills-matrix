package org.util.employeeskillsservice.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.model.EmployeeInformation;
import org.util.employeeskillsservice.service.EmployeeSkillUploaderService;
import org.util.employeeskillsservice.utility.BaseResposeEnity;

@RestController
@RequestMapping("/api")
public class EmployeeSkillsUploader {

    @Autowired
    private EmployeeSkillUploaderService skillUploader;

    @PostMapping("/upload-csv")
    public BaseResposeEnity uploadCSV(@RequestParam("file") MultipartFile file) {
        Collection<EmployeeInformation> employess= skillUploader.skillUploader(file);
        return  new BaseResposeEnity(HttpStatusCode.valueOf(201), "Employess data uploaded successfully", employess);      
    }
}
