import styled from "styled-components";

export const StyledRecord = styled.div`
  font-size: 0.5em;
  margin: ${({ theme }) => theme.margins.sm} ${({ theme }) => theme.margins.m};
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadiuses.s};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button};
  }
`;

export const RecordResult = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;
