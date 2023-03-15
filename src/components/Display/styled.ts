import styled from "styled-components";

export const StyledDisplay = styled.div`
  grid-area: display;
  height: 2em;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  font-size: 2em;
  text-align: right;
`;

export const OperandCommand = styled.div`
  margin: -16px 0;
  font-size: 0.5em;
  color: ${(props) => props.theme.border};
`;
