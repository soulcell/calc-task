import { DefaultTheme } from "styled-components";

export const lightTheme = {
  colors: {
    background: "#ffffff",
    header: "#434343",
    border: "#707070",
    text: "#000000",
    button: "#f2f2f2",
  },
};

export const darkTheme = {
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

export const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};
