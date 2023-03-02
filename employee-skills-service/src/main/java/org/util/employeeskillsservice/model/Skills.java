package org.util.employeeskillsservice.model;

public class Skills {

	private long employeeId;
	private String skills;
	private String skillTag;

	public long getEmployeeId() {
		return employeeId;
	}
	public Skills setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
		return this;
	}
	public String getSkills() {
		return skills;
	}
	public Skills setSkills(String skills) {
		this.skills = skills;
		return this;
	}
	public String getSkillTag() {
		return skillTag;
	}
	public Skills setSkillTag(SkillTagEnum skillTag) {
		this.skillTag = skillTag.getValue();
		return this;
	}
	@Override
	public String toString() {
		return "Skills [employeeId=" + employeeId + ", skills=" + skills + ", skillTag=" + skillTag + "]";
	}
}
