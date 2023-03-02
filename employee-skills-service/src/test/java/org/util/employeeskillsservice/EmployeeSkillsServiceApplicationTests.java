package org.util.employeeskillsservice;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.builder.SpringApplicationBuilder;

@ExtendWith(MockitoExtension.class)
class EmployeeSkillsServiceApplicationTests {

	@Mock
	private SpringApplicationBuilder springApplicationBuilder;

	@Test
	void mainTest() {
		EmployeeSkillsServiceApplication.main(new String[]{});
		assertTrue(true);
	}

}
