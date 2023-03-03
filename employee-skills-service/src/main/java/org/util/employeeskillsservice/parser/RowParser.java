package org.util.employeeskillsservice.parser;

import org.util.employeeskillsservice.model.Employee;

import java.util.List;

public interface RowParser<E> {
    List<Employee> parse();
}
