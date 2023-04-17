import styled from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

const StyledDisplay = styled.div`
  grid-area: display;
  height: ${({ theme }) => theme.heights.xl};
  padding: ${({ theme }) => theme.paddings.m};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  text-align: right;
  overflow: hidden;

  @media (max-width: ${ScreenSizes.Desktop}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    height: ${({ theme }) => theme.heights.l};
  }
`;

export default StyledDisplay;
