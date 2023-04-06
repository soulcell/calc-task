import styled from "styled-components";

const StyledCalculator = styled.div`
  display: grid;
  grid-template-areas:
    "display history"
    "keypad history";
  grid-template-columns: 1fr auto;
  height: calc(100vh - 140px);

  @media (max-width: 700px) {
    grid-template-areas:
      "display"
      "keypad"
      "history";
    height: unset;
  }
`;

export default StyledCalculator;
