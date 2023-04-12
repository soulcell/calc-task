import styled from "styled-components";

export const StyledRecord = styled.div`
  font-size: 0.5em;
  margin: 10px 20px;
  padding: 8px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button};
  }
`;

export const RecordResult = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;
