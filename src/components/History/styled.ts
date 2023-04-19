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
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: normal;
  margin: ${({ theme }) => theme.margins.m} ${({ theme }) => theme.margins.zero};
  text-align: center;

  @media (max-width: ${ScreenSizes.Desktop}px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
