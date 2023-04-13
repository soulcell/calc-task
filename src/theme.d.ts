import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      header: string;
      border: string;
      text: string;
      button: string;
    };
    headerHeight: string;
    controlPanelHeight: string;
    fonts: string[];
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  }
}
