package org.util.employeeskillsservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    @Column
    String skill;

    @Column
    String tag;

    @ManyToOne
    private Employee employee;


    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getTag() {
        return tag;
    }

   

    public Skill() {
    }

    public Skill(Long id, String skill, String tag) {
        this.id = id;
        this.skill = skill;
        this.tag = tag;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
