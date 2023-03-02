package org.util.employeeskillsservice.model;

/**
 * THis Enum will used to tag the skills.
 * @author Santosh kumar Sahu.
 * @since 1.0
 */
public enum SkillTagEnum {
    
    COMFORTABLE("Which of the following environments you are most comfortable using?", "operating system"),
    VERSION("Which version control tool you are aware of and can consider using?", "version control"),
    FRAMEWORK("Which of the following frameworks, libraries, or technologies you are already proficient in?", "frameworks"),
    LANGUAGES("Which of the following languages you are already proficient in?", "languages"),
    DESIGN("List all design patterns that you understand well and can implement independently.", "design patterns"),
    ARCHITECTURAL("Which architectural styles you understand well?", "architectural styles"),
    CERTIFICATIONS("What certifications have you completed?","certified"),
    ONLINECOURSE("What online courses have you completed?","course completed"),
    DEVOPS("Which DevOps & Automation tools are you familiar with and also competent with using?", "devops ops");



    private final String key;
    private final String value;

    SkillTagEnum(String key, String value) {
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
