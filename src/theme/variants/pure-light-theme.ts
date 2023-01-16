import { createTheme, alpha } from "@mui/material";
import "@mui/lab/themeAugmentation";
import { mediaQuery } from "../viewport";
import { CUSTOM_BUTTON_STYLE_BASED_ON_SIZE, STYLES } from '../utils';
import { PaletteColor } from "@mui/material/styles/createPalette";

// import i18n from 'src/i18n/i18n';

const themeColors = {
  // 017AB1
  primary: "#5569ff",
  secondary: "#1a1a1a",
  success: "#CCE069",
  warning: "#f6ff7a",
  error: "#FF1943",
  info: "#33C2FF",
  default: "#353535",
  black: "#545454",
  pureBlack: 'black',
  white: "#ffffff",
  link: "#3392ff",
};

export const commonTypographyStyles: STYLES = {
  fontFamily: "'Nunito', sans-serif",
};

export const commonButtonStyles: STYLES = {
  ...commonTypographyStyles,
  fontWeight: 600,
};

export const customButtonStyleBasedOnSize: CUSTOM_BUTTON_STYLE_BASED_ON_SIZE = {
  small: {
    padding: "5px 9px",
    margin: "5px",
  },
  medium: {
    padding: "7px 15px",
    margin: "5px",
  },
  large: {
    padding: "12px 17px",
    margin: "5px",
  },
  noSize: {
    padding: 0,
    margin: 0,
  },
};

export const PureLightTheme = createTheme({
  palette: {
    primary: {
      main: themeColors.primary
    },
    secondary: {
      main: themeColors.secondary
    },
    success: {
      main: themeColors.success
    },
    warning: {
      main: themeColors.warning
    },
    error: {
      main: themeColors.error
    },
    info: {
      main: themeColors.info
    },
  },
  colors: themeColors,
  general: {
    bodyBg: "#FFFFFF",
    fontFamily: "'Nunito', sans-serif",
  },
  layouts: {
    public: {},
  },
  header: {
    background: "#F6F8FA",
    boxShadow: "none",
    textColor: "black",
    height: "88.5px",
  },
  componentCustomStyles: {
    // typography
    h1: {
      ...commonTypographyStyles,
      fontWeight: 700,
      fontSize: "35px",
      margin: "4px 2px",
      lineHeight: "40px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "5px 3px",
      },
    },
    h2: {
      ...commonTypographyStyles,
      fontWeight: 700,
      fontSize: "30px",
      margin: "4px 2px",
      lineHeight: "38px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "5px 3px",
      },
    },
    h3: {
      ...commonTypographyStyles,
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: 1,
      color: themeColors.black,
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    h4: {
      ...commonTypographyStyles,
      fontWeight: 500,
      fontSize: "20px",
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    h5: {
      ...commonTypographyStyles,
      fontWeight: 500,
      fontSize: "17px",
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    h6: {
      ...commonTypographyStyles,
      fontSize: "15px",
      fontWeight: 500,
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    p: {
      ...commonTypographyStyles,
      fontWeight: 500,
      fontSize: "14px",
      margin: "3px 2px",
      [`${mediaQuery.up("sm")}`]: {
        margin: "4px 3px",
      },
    },
    pre: {
      ...commonTypographyStyles,
      fontWeight: 300,
      fontSize: "15px",
      color: themeColors.black,
    },
    span: {
      ...commonTypographyStyles,
      fontSize: "14px",
      color: themeColors.black,
    },
    link: {
      ...commonTypographyStyles,
      textDecoration: "none",
    },
    label: {
      ...commonTypographyStyles,
      fontFamily: "Gilroy",
      fontWeight: 500,
      margin: "5px 0",
    },
    subtitle1: {
      ...commonTypographyStyles,
      fontSize: 14,
      color: alpha(themeColors.black, 0.7),
    },
    subtitle2: {
      ...commonTypographyStyles,
      fontWeight: 400,
      fontSize: 15,
      color: alpha(themeColors.black, 0.7),
    },
    body1: {
      ...commonTypographyStyles,
      fontSize: 14,
    },
    body2: {
      ...commonTypographyStyles,
      fontSize: 14,
      fontWeight: 300,
      color: alpha(themeColors.black, 0.2),
    },
    caption: {
      ...commonTypographyStyles,
      fontSize: 13,
      textTransform: "uppercase",
      color: alpha(themeColors.black, 0.5),
    },
    overline: {
      ...commonTypographyStyles,
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
    },

    // other components
    Card: {},

    // Button
    button: {
      text: {
        ...commonButtonStyles,

      },
      outlined: {
        ...commonButtonStyles,

      },
      contained: {
        ...commonButtonStyles,
        
      },
      link: {
        ...commonButtonStyles,

      },
      ...customButtonStyleBasedOnSize
    },
  },
});
