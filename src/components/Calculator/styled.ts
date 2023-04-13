import ScreenSizes from "@constants/screenSizes";
import styled from "styled-components";

const StyledCalculator = styled.div`
  display: grid;
  grid-template-areas:
    "display history"
    "keypad history";
  grid-template-columns: 1fr auto;
  height: ${({ theme }) =>
    `calc(100vh - ${theme.headerHeight} - ${theme.controlPanelHeight})`};

  @media (max-width: ${`${ScreenSizes.Desktop}px`}) {
    grid-template-areas:
      "display"
      "keypad"
      "history";
    height: unset;
  }
`;

export default StyledCalculator;
