package org.util.employeeskillsservice.utility;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

public class Util {

    public static Supplier<List<String>> getQuestioners = () -> {
        List<String> questioner = new ArrayList<>();
		questioner.add("Which of the following environments you are most comfortable using?");
		questioner.add("Which version control tool you are aware of and can consider using?");
		questioner.add("Which of the following frameworks, libraries, or technologies you are already proficient in?");
		questioner.add("Which of the following languages you are already proficient in?");
		questioner.add("List all design patterns that you understand well and can implement independently.");
		questioner.add("Which architectural styles you understand well?");
		questioner.add("Which DevOps & Automation tools are you familiar with and also competent with using?");
		questioner.add("What certifications have you completed?");
		questioner.add("What online courses have you completed?");
        return questioner;
    };
    
}
