import styled from "styled-components";

export const StyledCalculator = styled.div`
  display: grid;
  grid-template-areas:
    "display history"
    "keypad history";
  grid-template-columns: 1fr auto;
  height: calc(100vh - 120px);

  @media (max-width: 600px) {
    grid-template-areas:
      "display"
      "keypad"
      "history";
    height: unset;
  }
`;
