import * as CSS from "csstype";
import { CUSTOM_BUTTON_PROPS } from "src/components";
import { projectConfig } from "src/config";
import * as CustomThemes from "./variants";

export enum THEME_NAMES {
  PureLightTheme = "pure-light-theme",
}

const customThemes = {
  [THEME_NAMES.PureLightTheme]: CustomThemes.PureLightTheme,
};

export type THEME = keyof typeof customThemes;

export function themeCreator(theme: keyof typeof customThemes) {
  return customThemes[theme] || customThemes[projectConfig.defaultTheme];
}

export const getTheme = () => {
  try {
    return (
      (window.localStorage.getItem("theme") as THEME) ||
      // THEME_NAMES.PureLightTheme
      ("pure-light-theme" as THEME_NAMES)
    );
  } catch {
    // return THEME_NAMES.PureLightTheme;
    return "pure-light-theme" as THEME_NAMES;
  }
};

// styled components CSS type
export type CSSProperties = CSS.Properties<string | number>;

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

export interface CSSObject extends CSSProperties, CSSPseudos {
  [key: string]: CSSObject | string | number | undefined;
}

export type STYLES = CSSObject;

export type THEME_COLORS = {
  primary: STYLES["color"];
  secondary: STYLES["color"];
  success: STYLES["color"];
  warning: STYLES["color"];
  error: STYLES["color"];
  info: STYLES["color"];
  black: STYLES["color"];
  pureBlack: STYLES["color"];
  white: STYLES["color"];
  link: STYLES["color"];
  default: STYLES["color"];
};

enum CUSTOM_BUTTON_VARIANT_KEYS {
  text = 'text',
  outlined = 'outlined',
  contained = 'contained',
  link = 'link',
}

enum CUSTOM_BUTTON_SIZE_KEYS {
  small = 'small',
  medium = 'medium',
  large = 'large',
  noSize = 'noSize',
}

type CUSTOM_BUTTON_STYLE_KEYS  = CUSTOM_BUTTON_VARIANT_KEYS & CUSTOM_BUTTON_SIZE_KEYS;

export type CUSTOM_BUTTON_STYLE_BASED_ON_SIZE = Record<
  CUSTOM_BUTTON_SIZE_KEYS,
  STYLES
>; // https://bobbyhadz.com/blog/typescript-index-signature-parameter-cannot-be-union-type -- reference

declare module "@mui/material/styles" {
  interface Theme {
    colors: THEME_COLORS;
    general: {
      bodyBg: STYLES["color"];
      fontFamily?: STYLES["fontFamily"];
    };
    layouts: {
      public: STYLES;
    };
    header: {
      height: string;
      background: STYLES["color"];
      boxShadow: STYLES["color"];
      textColor: STYLES["color"];
    };
    componentCustomStyles: {
      h1: STYLES;
      h2: STYLES;
      h3: STYLES;
      h4: STYLES;
      h5: STYLES;
      h6: STYLES;
      p: STYLES;
      pre: STYLES;
      span: STYLES;
      link: STYLES;
      label: STYLES;
      subtitle1: STYLES;
      subtitle2: STYLES;
      body1: STYLES;
      body2: STYLES;
      caption: STYLES;
      overline: STYLES;
      Card: STYLES;
      button: {
        [key in CUSTOM_BUTTON_STYLE_KEYS]: STYLES;
      };
      [ComponentName: string]: STYLES;
    };
  }

  interface ThemeOptions {
    colors: THEME_COLORS;
    general: {
      bodyBg: STYLES["color"];
      fontFamily?: STYLES["fontFamily"];
    };
    layouts: {
      public: STYLES;
    };
    header: {
      height: string;
      background: STYLES["color"];
      boxShadow: STYLES["color"];
      textColor: STYLES["color"];
    };
    componentCustomStyles: {
      h1: STYLES;
      h2: STYLES;
      h3: STYLES;
      h4: STYLES;
      h5: STYLES;
      h6: STYLES;
      p: STYLES;
      pre: STYLES;
      span: STYLES;
      link: STYLES;
      label: STYLES;
      subtitle1: STYLES;
      subtitle2: STYLES;
      body1: STYLES;
      body2: STYLES;
      caption: STYLES;
      overline: STYLES;
      Card: STYLES;
      button: {
        [key in CUSTOM_BUTTON_STYLE_KEYS]: STYLES;
      };
      [ComponentName: string]: STYLES;
    };
  }
}
