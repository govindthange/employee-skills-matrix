import { Avatar, Chip, Divider, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CodeIcon from '@mui/icons-material/Code';
import SocialMediaLink from "./SocialMediaLinks";
import Skills from "./Skills";
import { Container, Stack } from "@mui/system";
import { useMemo } from "react";

function DetailRender() {
    const employee = useSelector(state => state.employee.employee)
    const email ={}
    if (employee != null) {
        email.officeEmailId = employee.officeEmailId
        
    }

    const getImage = useMemo(() => (employee) => {
        if (employee === undefined) return '';
        if ( employee.officeEmailId === null) return <Avatar alt={employee.name} src="" sx={{ width: 56, height: 56 }}/>;
        const username = employee.officeEmailId.substring(0, employee.officeEmailId.indexOf("@"));
        const empImageURl = `http://182.66.209.42:85/intranet/images/employee/${employee.code}_${username}_winsoftech_com`;
        return (
            <Avatar alt="Remy Sharp" src={`${empImageURl}.jpg`} sx={{ width: 56, height: 56 }}>
            <Avatar alt="Remy Sharp" src={`${empImageURl}.jpeg`} sx={{ width: 56, height: 56 }}>
                <Avatar alt={employee.name} src={`${empImageURl}.png`} sx={{ width: 56, height: 56 }}/>
            </Avatar>
         </Avatar>
        )
    });
    
    return employee && Object.keys(employee).length > 0 ? (
        <Paper svariant="elevation" sx={{ p: 2, overflow: 'auto', height: "85vh" }} elevation={2}>
            <Stack direction="row" spacing={2}>
                {getImage(employee)}
            <Typography variant="h3" component="h2"> {employee.name}</Typography>
            </Stack>

            <Chip icon={<CodeIcon />} label={employee.designation} sx={{ my: 2 }} />
            <Chip icon={<WorkOutlineIcon />} label={`${employee.yearsOfExperience} years`} sx={{ my: 2, mx: 2 }} />
            <SocialMediaLink githubUrl={employee.githubUrl} linkedinUrl={employee.linkedinUrl} officeEmailId={email}/>
            <Divider variant="middle" sx={{mt: 2}}/>
            <Skills skills={employee.skills}/>
        </Paper>

    ) : (<Typography variant="h3" sx={{p: 4}}> Select Employee</Typography>)
}

export default DetailRender;