import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import selectSettings from "../store/reducers/settings/selector";
import GlobalStyle from "./globalStyle";
import { darkTheme, lightTheme } from "./theme";

export type StyledAppProps = {
  children: React.ReactNode;
};

export default function StyledApp({ children }: StyledAppProps): JSX.Element {
  const { theme: themeName } = useSelector(selectSettings);
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  useEffect(() => {
    switch (themeName) {
      case "dark":
        setTheme(darkTheme);
        break;
      case "light":
        setTheme(lightTheme);
        break;
      default:
        setTheme(lightTheme);
        break;
    }
  }, [themeName]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
