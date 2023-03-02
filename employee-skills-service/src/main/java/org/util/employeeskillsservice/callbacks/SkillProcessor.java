package org.util.employeeskillsservice.callbacks;

import org.util.employeeskillsservice.model.Skill;
import org.util.employeeskillsservice.model.Tags;

import java.util.ArrayList;
import java.util.List;

public class SkillProcessor {
    public static List<Skill> process(String[] values, String tag) {
        List<Skill> skills = new ArrayList<>();
        for(String value : values) {
            if(!value.isBlank()) {
                Skill skill = new Skill();
                skill.setSkill(value);
                skill.setTag(tag);
                skills.add(skill);
            }
        }
        return skills;
    }
}
