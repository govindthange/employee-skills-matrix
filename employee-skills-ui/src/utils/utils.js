import { createTheme } from "@mui/material";
import { amber, deepPurple } from "@mui/material/colors";

export const getThemeObj = (primaryColor, secondaryColor, mode) => {
    return createTheme({
        palette: {
        mode: mode,
        primary: {
          main: primaryColor,
        },
        secondary: {
          main: secondaryColor,
        }
      },
    });
}

export const defaultThemeColor = {
    primacyColor: deepPurple[500],
    secondaryColor: amber[500]
}