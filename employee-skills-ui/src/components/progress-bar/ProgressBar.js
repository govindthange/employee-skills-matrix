import { Box, LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { HIDDEN } from "../../redux/progress-bar/progressbarConstants";

function ProgressBar() {
    const visibility = useSelector(state => state.progressbar.visibility)
    const isVisible =  visibility === HIDDEN ? false : true;
    return (
        <Box sx={{ flexGrow: 1 }}>
           {isVisible && <LinearProgress color="secondary"/>} 
        </Box>
    )
}

export default ProgressBar;