package org.util.employeeskillsservice.model;

import java.util.List;

import com.opencsv.bean.CsvBindByName;

/**
 * 
 */
public class EmployeeInformation {
    @CsvBindByName(column = "Name")
	private String name;
	
	@CsvBindByName(column = "Employee Code")
	private long employeeCode;
	
	@CsvBindByName(column = "Location")
	private String location;
	
	@CsvBindByName(column = "Designation")
	private String designation;
	
	@CsvBindByName(column = "Mobile Number")
	private long mobileNo;
	
	@CsvBindByName(column = "Years of Experience")
	private float yearOfExperience;
	
	@CsvBindByName(column = "GitHub Account URL")
	private String gitHubAccountURL;
	
	@CsvBindByName(column = "LinkedIn Profile URL")
	private String linkedInProfileURL;
	
	@CsvBindByName(column = "Username")
	private String emailid;
	
	private List<Skills> skills;

	public String getName() {
		return name;
	}
	public EmployeeInformation setName(String name) {
		this.name = name;
		return this;
	}
	public long getEmployeeCode() {
		return employeeCode;
	}
	public EmployeeInformation setEmployeeCode(long employeeCode) {
		this.employeeCode = employeeCode;
		return this;
	}
	public String getLocation() {
		return location;
	}
	public EmployeeInformation setLocation(String location) {
		this.location = location;
		return this;
	}
	public String getDesignation() {
		return designation;
	}
	public EmployeeInformation setDesignation(String designation) {
		this.designation = designation;
		return this;
	}
	public long getMobileNo() {
		return mobileNo;
	}
	public EmployeeInformation setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
		return this;
	}
	public float getYearOfExperience() {
		return yearOfExperience;
	}
	public EmployeeInformation setYearOfExperience(float yearOfExperience) {
		this.yearOfExperience = yearOfExperience;
		return this;
	}
	public String getGitHubAccountURL() {
		return gitHubAccountURL;
	}
	public EmployeeInformation setGitHubAccountURL(String gitHubAccountURL) {
		this.gitHubAccountURL = gitHubAccountURL;
		return this;
	}
	public String getLinkedInProfileURL() {
		return linkedInProfileURL;
	}
	public EmployeeInformation setLinkedInProfileURL(String linkedInProfileURL) {
		this.linkedInProfileURL = linkedInProfileURL;
		return this;
	}
	public String getEmailid() {
		return emailid;
	}
	public EmployeeInformation setEmailid(String emailid) {
		this.emailid = emailid;
		return this;
	}
	public List<Skills> getSkills() {
		return skills;
	}
	public void setSkills(List<Skills> skills) {
		this.skills = skills;
	}

	@Override
	public String toString() {
		return "EmployeeBasicInfo [name=" + name + ", employeeCode=" + employeeCode + ", location=" + location
				+ ", designation=" + designation + ", mobileNo=" + mobileNo + ", yearOfExperience=" + yearOfExperience
				+ ", gitHubAccountURL=" + gitHubAccountURL + ", linkedInProfileURL=" + linkedInProfileURL + ", emailid="
				+ emailid + ", skills=" + skills + "]";
	}
}
