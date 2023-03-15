import styled from "styled-components";

export const StyledButton = styled.button`
  align-self: center;
  justify-self: center;
  width: 1.5em;
  height: 1.5em;
  font-size: 2em;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.button};
  border-radius: 16px;
  padding: 0;
  &:hover {
    background-color: ${(props) => props.theme.border};
  }
`;
