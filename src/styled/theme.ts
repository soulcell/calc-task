import { DefaultTheme } from "styled-components";

export const lightTheme = {
  name: "Light theme",
  colors: {
    background: "#ffffff",
    header: "#434343",
    border: "#707070",
    text: "#000000",
    button: "#f2f2f2",
  },
};

export const darkTheme = {
  name: "Dark theme",
  colors: {
    background: "#171717",
    header: "#808080",
    border: "#808080",
    text: "#CCCCCC",
    button: "#434343",
  },
};

export const defaultTheme: DefaultTheme = {
  colors: {
    background: "#ffffff",
    header: "#434343",
    border: "#707070",
    text: "#000000",
    button: "#f2f2f2",
  },
  headerHeight: "100px",
  controlPanelHeight: "40px",
  fonts: ["Helvetica Neue", "Segoe UI", "Droid Sans", "sans-serif"],
  fontSizes: {
    xs: "10px",
    s: "16px",
    m: "21px",
    l: "32px",
    xl: "42px",
    xxl: "64px",
  },
};

export const THEMES: { [id: string]: typeof lightTheme } = {
  light: lightTheme,
  dark: darkTheme,
};
