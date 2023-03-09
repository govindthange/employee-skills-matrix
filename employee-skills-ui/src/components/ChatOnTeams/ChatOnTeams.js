import { IconButton, SvgIcon } from "@mui/material";
import {ReactComponent as TeamsEnabled} from '../../teams.svg'
import {ReactComponent as TeamsDisabled} from '../../teams-disabled.svg'
export default function ChatOnTeams(props) {

    console.log(props);

    const url = `https://teams.microsoft.com/l/chat/0/0?users=${props.value.officeEmailId}`
    const teamIcon = props.value.officeEmailId !== "" ? TeamsEnabled : TeamsDisabled

    
    return (
        <IconButton target="_blank" href={url} disabled={false}>
           <SvgIcon component={teamIcon} inheritViewBox />
        </IconButton>
    )
}