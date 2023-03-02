package org.util.employeeskillsservice;

import org.apache.commons.csv.CSVRecord;
import org.util.employeeskillsservice.model.Employee;
import org.util.employeeskillsservice.parser.CellMapper;
import org.util.employeeskillsservice.parser.RowParser;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class EmployeeRowParser implements RowParser {
    private Iterable<CSVRecord> rows;
    private List<Employee> employees;

    public EmployeeRowParser(Iterable<CSVRecord> rows) {
        this.rows = rows;
        employees = new ArrayList<>();
    }

    @Override
    public void parse() {
        for(CSVRecord row : rows) {

            Map<String, String> cells = row.toMap();
            CellMapper<Employee> cellMapper = new EmployeeSkillCellMapper();


            Employee emp = new Employee();
            cells.forEach((key, value) -> {
                cellMapper.map(key, value, emp);

            });
            employees.add(emp);

        }

        System.out.println(employees);
    }
}
