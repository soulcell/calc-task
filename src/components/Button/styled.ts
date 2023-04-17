import styled from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

const StyledButton = styled.button`
  align-self: center;
  justify-self: center;
  width: ${({ theme }) => theme.widths.l};
  height: ${({ theme }) => theme.heights.l};
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
    width: ${({ theme }) => theme.widths.m};
    height: ${({ theme }) => theme.heights.m};
  }
`;

export default StyledButton;
