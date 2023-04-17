import styled from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

export const StyledControlPanel = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: ${({ theme }) => theme.controlPanelHeight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Button = styled.button<{ hideOnMobile?: boolean }>`
  font-size: 0.5em;
  margin: ${({ theme }) => theme.margins.xs} ${({ theme }) => theme.margins.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.borderRadiuses.xs};
  padding: ${({ theme }) => theme.paddings.xxs}
    ${({ theme }) => theme.paddings.s};
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
  @media (max-width: ${`${ScreenSizes.Desktop}px`}) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "revert")};
  }
`;
