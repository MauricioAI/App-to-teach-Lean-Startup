import { createTheme } from "@mui/material";
import { red, green, grey } from "@mui/material/colors";

// Color palette:

// main
const primaryColor = '#E4572E';
const secondaryColor = '#17BEBB';
const errorColor = red[500];
const warningColor = '#FFC914';
const infoColor = '#2E282A';
const sucessColor = green[500];

// text
const textPrimaryColor = '#FFFFFF';
const textSecondaryColor = grey[400];

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        },
        error: {
            main: errorColor
        },
        warning: {
            main: warningColor
        },
        info: {
            main: infoColor
        },
        success: {
            main: sucessColor
        },
        text: {
            secondary: textSecondaryColor
        }
    }
});

export default theme;