import styled from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

export const StyledDisplay = styled.div`
  grid-area: display;
  height: 2em;
  padding: ${({ theme }) => theme.paddings.m};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  text-align: right;
  overflow: hidden;

  @media (max-width: ${ScreenSizes.Desktop}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const OperandCommand = styled.div`
  margin: -16px 0;
  font-size: 0.5em;
  color: ${({ theme }) => theme.colors.border};
`;
