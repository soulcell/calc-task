import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ScreenSizeProvider from "@contexts/ScreenSize/provider";
import selectSettings from "@store/reducers/settings/selector";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./globalStyle";
import { defaultTheme, THEMES } from "./theme";

export default function StyledApp({
  children,
}: React.PropsWithChildren): JSX.Element {
  const { currentTheme } = useSelector(selectSettings);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    setTheme({
      ...defaultTheme,
      ...THEMES[currentTheme as keyof typeof THEMES],
    });
  }, [currentTheme]);

  return (
    <ScreenSizeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ScreenSizeProvider>
  );
}
