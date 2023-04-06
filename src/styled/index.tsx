import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import selectSettings from "../store/reducers/settings/selector";

import GlobalStyle from "./globalStyle";
import { defaultTheme, THEMES } from "./theme";

export type StyledAppProps = {
  children: React.ReactNode;
};

export default function StyledApp({ children }: StyledAppProps): JSX.Element {
  const { currentTheme } = useSelector(selectSettings);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    setTheme({
      ...defaultTheme,
      ...THEMES[currentTheme as keyof typeof THEMES],
    });
  }, [currentTheme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
