import ScreenSizes from "@constants/screenSizes";
import styled from "styled-components";

export const StyledControlPanel = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: ${({ theme }) => theme.controlPanelHeight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Button = styled.button<{ hideOnMobile?: boolean }>`
  font-size: 0.5em;
  margin: 4px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 4px;
  padding: 2px 8px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
  @media (max-width: ${`${ScreenSizes.Desktop}px`}) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "revert")};
  }
`;
