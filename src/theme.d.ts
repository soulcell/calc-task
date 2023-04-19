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
    borderRadiuses: {
      xs: string;
      s: string;
      m: string;
    };
    margins: {
      zero: string;
      xs: string;
      s: string;
      sm: string;
      m: string;
      l: string;
    };
    paddings: {
      zero: string;
      xxs: string;
      xs: string;
      s: string;
      sm: string;
      m: string;
      l: string;
    };
    widths: {
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    heights: {
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  }
}
