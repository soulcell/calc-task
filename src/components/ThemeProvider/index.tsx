import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import selectSettings from "@/store/selectors/settings";
import GlobalStyle from "@/styled/globalStyle";
import { defaultTheme, THEMES } from "@/styled/theme";

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
