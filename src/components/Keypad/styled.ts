import styled from "styled-components";

export const Button = styled.button`
  align-self: center;
  justify-self: center;
  width: 1.5em;
  height: 1.5em;
  font-size: 2em;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 16px;
  padding: 0;
  &:hover {
    background-color: ${(props) => props.theme.border};
  }
`;

export const StyledKeypad = styled.div`
  grid-area: keypad;
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 10px;
  padding: 20px;
`;
