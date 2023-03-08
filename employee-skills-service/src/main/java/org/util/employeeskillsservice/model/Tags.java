package org.util.employeeskillsservice.model;

public enum Tags {
    OPERATING_SYSTEM("Which of the following environments you are most comfortable using?", "Operating System"),
    VERSION("Which version control tool you are aware of and can consider using?", "Version Control"),
    FRAMEWORK("Which of the following frameworks, libraries, or technologies you are already proficient in?", "Frameworks"),
    LANGUAGES("Which of the following languages you are already proficient in?", "Languages"),
    DESIGN("List all design patterns that you understand well and can implement independently.", "Design Patterns"),
    ARCHITECTURAL("Which architectural styles you understand well?", "Architectural Styles"),
    CERTIFICATIONS("What certifications have you completed?","Certified"),
    ONLINECOURSE("What online courses have you completed?","Course Completed"),
    DEVOPS("Which DevOps & Automation tools are you familiar with and also competent with using?", "Devops Ops");

    private final String key;
    private final String value;
    Tags(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }
}
