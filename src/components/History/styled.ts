import styled from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

export const StyledHistory = styled.div<{ isHidden?: boolean }>`
  grid-area: history;
  height: 100%;
  overflow: auto;
  transition: width 0.07s;
  border-left: ${({ isHidden, theme }) =>
    isHidden ? "none" : `1px solid ${theme.colors.border}`};
  width: ${({ isHidden }) => (isHidden ? "0px" : "300px")};

  @media (max-width: ${`${ScreenSizes.Desktop}px`}) {
    width: 100%;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Title = styled.h2`
  font-size: 1em;
  font-weight: normal;
  margin: 20px 0;
  text-align: center;
`;
