import styled from "styled-components";

export const Button = styled.button`
  align-self: center;
  justify-self: center;
  width: 1.5em;
  height: 1.5em;
  font-size: 2em;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const StyledKeypad = styled.div`
  grid-area: keypad;
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-auto-rows: min-content;

  @media (max-width: 700px) {
  }
  gap: 5px;
  padding: 10px;
`;
