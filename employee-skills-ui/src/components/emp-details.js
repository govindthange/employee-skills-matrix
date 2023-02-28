import { Typography } from '@mui/material';

export default function EmpDetails(props) {
    return <div>
        <h1>Emp details</h1>
        <label>{props.id}</label><br></br>
        <label>{props.name}</label>
        <Typography variant='h1'>h1</Typography>
    </div>
}