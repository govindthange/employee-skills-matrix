package org.util.employeeskillsservice;

import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.util.employeeskillsservice.model.Employee;
import org.util.employeeskillsservice.parser.CellMapper;
import org.util.employeeskillsservice.parser.RowParser;
import org.util.employeeskillsservice.service.EmployeeService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeRowParser implements RowParser {
    private Iterable<CSVRecord> rows;
    private List<Employee> employees;

    public EmployeeRowParser() {
        employees = new ArrayList<>();
    }

    @Override
    public List<Employee> parse() {
        for(CSVRecord row : rows) {

            Map<String, String> cells = row.toMap();
            CellMapper<Employee> cellMapper = new EmployeeSkillCellMapper();


            Employee emp = new Employee();
            cells.forEach((key, value) -> {
                cellMapper.map(key, value, emp);

            });
            employees.add(emp);
        }
        return employees;

    }

    public void setRow(Iterable<CSVRecord> rows) {
        this.rows = rows;
    }
}
