package org.util.employeeskillsservice.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.multipart.MultipartFile;
import org.util.employeeskillsservice.service.EmployeeSkillUploaderService;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;

@ExtendWith(MockitoExtension.class)
public class EmployeeSkillsUploaderTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private EmployeeSkillUploaderService empService;

    @InjectMocks
    EmployeeSkillsUploader skills;

    @BeforeEach // this method runs before every test method runs
    public void setUp() throws Exception {
        // This line is use to run the controller as a standlone setup
        mockMvc = MockMvcBuilders.standaloneSetup(skills).build();
    }

    @Test
    public void uploadCSVTest() throws Exception {
        
        when(empService.skillUploader(any(MultipartFile.class))).thenReturn(new ArrayList<>());
        File file = new File("src/test/resources/SkillSetMatrix.csv");
        InputStream stream =  new FileInputStream(file);
        MockMultipartFile multipartFileToSend = new MockMultipartFile("file", file.getName(), MediaType.TEXT_HTML_VALUE, stream);
        MockHttpServletResponse response = mockMvc.perform(multipart("/api/upload-csv")
        .file(multipartFileToSend).accept(MediaType.APPLICATION_JSON)).andReturn().getResponse();
        assertEquals(200, response.getStatus());

    }
}
