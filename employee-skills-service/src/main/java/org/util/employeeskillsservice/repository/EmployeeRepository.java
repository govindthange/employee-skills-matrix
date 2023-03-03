package org.util.employeeskillsservice.repository;

import org.springframework.data.repository.CrudRepository;
import org.util.employeeskillsservice.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
