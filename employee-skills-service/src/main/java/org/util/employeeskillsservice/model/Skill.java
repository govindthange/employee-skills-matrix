package org.util.employeeskillsservice.model;

public class Skill {
    String skill;
    String tag;

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    @Override
    public String toString() {
        return "{\"Skill\":{"
                + "\"skill\":\"" + skill + "\""
                + ", \"tag\":\"" + tag + "\""
                + "}}";
    }
}
