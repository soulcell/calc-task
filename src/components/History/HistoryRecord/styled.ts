import styled from "styled-components";

export const StyledRecord = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin: ${({ theme }) => theme.margins.sm} ${({ theme }) => theme.margins.m};
  padding: ${({ theme }) => theme.paddings.s};
  border-radius: ${({ theme }) => theme.borderRadiuses.s};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button};
  }
`;

export const RecordResult = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: bold;
`;
