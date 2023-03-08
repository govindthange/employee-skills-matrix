package org.util.employeeskillsservice.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Employee {


    public Employee(Long code, String name, String localtion, String designation, String mobileNumber,
            String yearsOfExperience, String githubUrl, String linkedinUrl, List<Skill> skills) {
        this.code = code;
        this.name = name;
        this.localtion = localtion;
        this.designation = designation;
        this.mobileNumber = mobileNumber;
        this.yearsOfExperience = yearsOfExperience;
        this.githubUrl = githubUrl;
        this.linkedinUrl = linkedinUrl;
        this.skills = skills;
    }

    public Employee() {
    }

    @Id
    Long code;

    @Column
    String name;

    @Column
    String localtion;

    @Column
    String designation;

    @Column
    String mobileNumber;

    @Column
    String yearsOfExperience;

    @Column
    String githubUrl;

    @Column
    String linkedinUrl;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name ="employee_id")
    List<Skill> skills = new ArrayList<>();

    

    public String getLocaltion() {
        return localtion;
    }

    public void setLocaltion(String localtion) {
        this.localtion = localtion;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(String yearOfExperience) {
        this.yearsOfExperience = yearOfExperience;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getLinkedinUrl() {
        return linkedinUrl;
    }

    public void setLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
    }

    public void setSkills(List<Skill> skills) {
        this.skills = skills;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getCode() {
        return code;
    }

    public void setCode(Long code) {
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
