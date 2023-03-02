package org.util.employeeskillsservice.callbacks;

import org.util.employeeskillsservice.model.CellCallBack;
import org.util.employeeskillsservice.model.Skill;
import org.util.employeeskillsservice.model.Tags;

import java.util.List;
import java.util.function.Function;

public class OnlineCourseCallback implements CellCallBack {
    Function<String[], List<Skill>> callback = (values) -> SkillProcessor.process(values, Tags.ONLINECOURSE.getValue());

    @Override
    public List<Skill> execute(String[] values) {
        return callback.apply(values);
    }
}
