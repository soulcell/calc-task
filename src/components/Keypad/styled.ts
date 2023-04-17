import styled from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

const StyledKeypad = styled.div`
  grid-area: keypad;
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-auto-rows: min-content;

  @media (max-width: ${`${ScreenSizes.Desktop}px`}) {
  }
  gap: 5px;
  padding: ${({ theme }) => theme.paddings.sm};
`;

export default StyledKeypad;
