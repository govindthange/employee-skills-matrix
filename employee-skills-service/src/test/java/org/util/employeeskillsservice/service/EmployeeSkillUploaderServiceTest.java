package org.util.employeeskillsservice.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.model.EmployeeInformation;

@ExtendWith(MockitoExtension.class)
public class EmployeeSkillUploaderServiceTest {

    @InjectMocks
    EmployeeSkillUploaderService employeeSkillUploaderService;

    @Test
    void testSkillUploader() throws IOException {
        File file = new File("src/test/resources/SkillSetMatrix.csv");
        InputStream stream =  new FileInputStream(file);
        MultipartFile multipartFileToSend = new MockMultipartFile("file", file.getName(), MediaType.TEXT_HTML_VALUE, stream);
        Collection<EmployeeInformation> employees = employeeSkillUploaderService.skillUploader(multipartFileToSend);
        assertEquals(116, employees.size());
    }
}
