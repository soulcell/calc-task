import styled from "styled-components";

export const StyledButton = styled.button`
  align-self: center;
  justify-self: center;
  width: 1.5em;
  height: 1.5em;
  font-size: 2em;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.button};
  border-radius: 16px;
  padding: 0;
  &:hover {
    background-color: ${({ theme }) => theme.border};
  }
`;
