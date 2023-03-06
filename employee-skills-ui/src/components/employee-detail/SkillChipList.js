import { Chip, Divider, Stack } from "@mui/material";

function SkillChipList({skills}) {
    const skillsList = skills.map(s => {
        return (
            
            <Chip label={s.skill} variant="outlined" key={s.skill}/>
            
            
        )
    })
    return (
        <Stack  direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>
          {skillsList}
        </Stack>
    )
}

export default SkillChipList;