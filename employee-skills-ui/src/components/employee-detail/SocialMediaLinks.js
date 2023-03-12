import { Button, Divider, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChatOnTeams from "../ChatOnTeams/ChatOnTeams";

const PLATFORM  = {
    GITHUB: "https://github.com",
    LINKEDIN: "https://www.linkedin.com/in"
}

const isUrlValid = (url, platform) => {
    const tempUrl = url.toLowerCase();
    const invalidText = ['n', 'no', 'na', 'not yet', 'not available', ''];
    if(invalidText.includes(tempUrl)) {
        return [false, ""];
    } else {
        if (tempUrl.includes("github.com") || tempUrl.includes("linkedin.com")) {
            return [true, url];
        } else {
            return [true, `${platform}/${url}`];
        }
    }
}

function SocialMediaLink({githubUrl, linkedinUrl, officeEmailId}) {
    const [isGitUrlvalid, validGitUrl] = isUrlValid(githubUrl, PLATFORM.GITHUB);
    const [isLinkedinUrlvalid, validLinkedinUrl] = isUrlValid(linkedinUrl, PLATFORM.LINKEDIN);
    return (
        <Stack  direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>
            <Button 
                variant="text"
                startIcon={<GitHubIcon />}
                target="_blank"
                href={validGitUrl}
                disabled={!isGitUrlvalid}
            >
                Github
            </Button>

            <Button 
                variant="text"
                startIcon={<LinkedInIcon />}
                target="_blank"
                href={validLinkedinUrl}
                disabled={!isLinkedinUrlvalid}
            >
                Linkedin
            </Button>

            <ChatOnTeams value={officeEmailId}/>
        </Stack>

    )
}

export default SocialMediaLink;