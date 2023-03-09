import { IconButton, SvgIcon } from "@mui/material";
import {ReactComponent as TeamsEnabled} from '../../teams.svg'
import {ReactComponent as TeamsDisabled} from '../../teams-disabled.svg'
export default function ChatOnTeams(props) {

   

    const teamIcon = props.value.officeEmailId !== null ? TeamsEnabled : TeamsDisabled
    const email = props.value.officeEmailId;
    const attributes = {
        target: "_blank",
        disabled: true
    }

    if (email != null) {
        attributes.href = `https://teams.microsoft.com/l/chat/0/0?users=${email}`
        attributes.disabled = false
    }

    
    return (
        <IconButton {...attributes}>
           <SvgIcon component={teamIcon} inheritViewBox />
        </IconButton>
    )
}