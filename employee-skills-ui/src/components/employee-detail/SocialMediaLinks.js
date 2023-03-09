import { Button, Divider, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChatOnTeams from "../ChatOnTeams/ChatOnTeams";

function SocialMediaLink({githubUrl, linkedinUrl, officeEmailId}) {
    return (
        <Stack  direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>
            <Button 
                variant="text"
                startIcon={<GitHubIcon />}
                target="_blank"
                href={githubUrl}
            >
                Github
            </Button>

            <Button 
                variant="text"
                startIcon={<LinkedInIcon />}
                target="_blank"
                href={linkedinUrl}
            >
                Linkedin
            </Button>

            <ChatOnTeams value={officeEmailId}/>
        </Stack>

    )
}

export default SocialMediaLink;