import { Paper, skeletonClasses, Typography } from "@mui/material";
import BorderedSection from "../bordered-section/BorderedSection";
import SkillChipList from "./SkillChipList";

const groupBy = (xs, key) => {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

function Skills({skills}) {

    const skillsByTag = groupBy(skills, 'tag')
    const skillList = Object.entries(skillsByTag).map(([key, value]) => {
           return ( <BorderedSection title={key} key={key}>
                <div>
                <SkillChipList skills={value}/>
                </div>
            </BorderedSection>
           )
    })
    return (
     
            <>
             {skillList}
            </>
          
      
    )
}

export default Skills;