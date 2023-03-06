import { Button, Divider, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialMediaLink({githubUrl, linkedinUrl}) {
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
        </Stack>

    )
}

export default SocialMediaLink;