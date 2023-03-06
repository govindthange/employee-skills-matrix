import { Box, Stack } from "@mui/material";

export default function ColorIcon({primaryColor, secondaryColor}) {
    return (
        <Stack direction="column">
            <Box sx={{
                width: 50,
                height: 10,
                backgroundColor: primaryColor
            }}></Box>
            <Box sx={{
                width: 50,
                height: 10,
                backgroundColor: secondaryColor
            }}></Box>
        </Stack>
    )
}