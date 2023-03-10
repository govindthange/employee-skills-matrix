import { Chip, Divider, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CodeIcon from '@mui/icons-material/Code';
import SocialMediaLink from "./SocialMediaLinks";
import Skills from "./Skills";
function DetailRender() {
    const employee = useSelector(state => state.employee.employee)
    const email ={}
    if (employee != null) {
        email.officeEmailId = employee.officeEmailId
        
    }
    
    return employee && Object.keys(employee).length > 0 ? (
        <Paper svariant="elevation" sx={{ p: 2, overflow: 'auto', height: "85vh" }} elevation={2}>
            <Typography variant="h3" component="h2"> {employee.name}</Typography>
            <Chip icon={<CodeIcon />} label={employee.designation} sx={{ my: 2 }} />
            <Chip icon={<WorkOutlineIcon />} label={`${employee.yearsOfExperience} years`} sx={{ my: 2, mx: 2 }} />
            <SocialMediaLink githubUrl={employee.githubUrl} linkedinUrl={employee.linkedinUrl} officeEmailId={email}/>
            <Divider variant="middle" sx={{mt: 2}}/>
            <Skills skills={employee.skills}/>
        </Paper>

    ) : (<h1> Select Employee</h1>)
}

export default DetailRender;