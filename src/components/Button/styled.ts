import styled from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

const StyledButton = styled.button`
  align-self: center;
  justify-self: center;
  width: 1.5em;
  height: 1.5em;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: ${({ theme }) => theme.borderRadiuses.m};
  padding: ${({ theme }) => theme.paddings.zero};
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${ScreenSizes.Desktop}px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export default StyledButton;
