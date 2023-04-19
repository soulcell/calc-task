import styled from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.paddings.l};
`;

export const Title = styled.h2`
  margin: ${({ theme }) => theme.margins.xs}
    ${({ theme }) => theme.margins.zero};
  font-size: ${({ theme }) => theme.fontSizes.xl};

  @media (max-width: ${ScreenSizes.Desktop}px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
