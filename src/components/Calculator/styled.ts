import styled from "styled-components";

export const StyledCalculator = styled.div`
  display: grid;
  grid-template-areas:
    "display history"
    "keypad history";
  grid-template-columns: 1fr auto;
  height: 100%;

  @media (max-width: 700px) {
    grid-template-areas:
      "display"
      "keypad"
      "history";
    height: unset;
  }
`;
