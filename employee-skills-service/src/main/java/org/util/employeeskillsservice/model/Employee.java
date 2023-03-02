package org.util.employeeskillsservice.model;

import java.util.ArrayList;
import java.util.List;

public class Employee {
    String code;
    String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    List<Skill> skills = new ArrayList<>();

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<Skill> getSkills() {
        return skills;
    }

    public void addSkills(Skill skill) {
        this.skills.add(skill);
    }

    public void addSkiils(List<Skill> skills) {
        this.skills.addAll(skills);
    }

    @Override
    public String toString() {
        return "{\"Employee\":{"
                + "\"code\":\"" + code + "\""
                + ", \"name\":\"" + name + "\""
                + ", \"skills\":" + skills
                + "}}";
    }
}
