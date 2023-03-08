package org.util.employeeskillsservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.util.employeeskillsservice.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    
}
