package org.util.employeeskillsservice.model;

import java.util.List;

public interface CellCallBack<T> {
    T execute(String[] values);

    default void process(String[] values, List<T> list) {
        for(String value : values) {
            if(!value.isBlank()) {
                Skill skill = new Skill();
                skill.setSkill(value);
                skill.setTag(Tags.OPERATING_SYSTEM.getValue());
                list.add((T) skill);
            }

        }
    }
}
