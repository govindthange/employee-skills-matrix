package org.util.employeeskillsservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.util.employeeskillsservice.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
