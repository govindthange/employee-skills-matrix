import { IconButton, SvgIcon } from "@mui/material";
import {ReactComponent as TeamsEnabled} from '../../teams.svg'
import {ReactComponent as TeamsDisabled} from '../../teams-disabled.svg'
export default function ChatOnTeams(props) {


    const url = `https://teams.microsoft.com/l/chat/0/0?users=${props.data.officeEmailId}`
    const teamIcon = props.data.officeEmailId !== "" ? TeamsEnabled : TeamsDisabled

    
    return (
        <IconButton target="_blank" href={url} disabled={false}>
           <SvgIcon component={teamIcon} inheritViewBox />
        </IconButton>
    )
}