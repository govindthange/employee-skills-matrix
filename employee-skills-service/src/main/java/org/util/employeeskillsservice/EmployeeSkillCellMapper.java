package org.util.employeeskillsservice;

import org.util.employeeskillsservice.callbacks.*;
import org.util.employeeskillsservice.model.CellCallBack;
import org.util.employeeskillsservice.model.Employee;
import org.util.employeeskillsservice.model.Skill;
import org.util.employeeskillsservice.model.Tags;
import org.util.employeeskillsservice.parser.CellMapper;
import org.util.employeeskillsservice.parser.EmployeeCellCallback;

import java.util.List;

public class EmployeeSkillCellMapper implements CellMapper<Employee> {

    EmployeeCellCallback callback;
    public EmployeeSkillCellMapper() {
        callback = new EmployeeCellCallback();
        callback.registerCallback(Tags.OPERATING_SYSTEM.getKey(), new OperatingSystemCallback());
        callback.registerCallback(Tags.VERSION.getKey(), new VersionControlCallback());
        callback.registerCallback(Tags.FRAMEWORK.getKey(), new FrameworkCallback());
        callback.registerCallback(Tags.LANGUAGES.getKey(), new LanguagesCallback());
        callback.registerCallback(Tags.DESIGN.getKey(), new DesignCallback());
        callback.registerCallback(Tags.ARCHITECTURAL.getKey(), new ArchitecturalCallback());
        callback.registerCallback(Tags.CERTIFICATIONS.getKey(), new CertificationCallback());
        callback.registerCallback(Tags.ONLINECOURSE.getKey(), new OnlineCourseCallback());
        callback.registerCallback(Tags.DEVOPS.getKey(), new DevopsCallback());
    }


    @Override
    public void map(String cell, String value, Employee emp) {
        if (cell.equalsIgnoreCase("Employee Code")) {
                emp.setCode(value);
        }

        if (cell.equalsIgnoreCase("name")) {
            emp.setName(value);
        }

        for (Tags tag : Tags.values()) {
            emp.addSkiils(processCell(value, tag.getKey()));
        }
    }

    List<Skill> processCell(String value, String tagKey) {
        String[] skills = value.split(";");
        CellCallBack registerCallback = callback.getRegisterCallback(tagKey);
        return (List<Skill>) registerCallback.execute(skills);
    }
}
