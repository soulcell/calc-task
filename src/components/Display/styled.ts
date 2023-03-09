import styled from "styled-components";

export const StyledDisplay = styled.div`
  grid-area: display;
  //margin: 0 23px 0 42.5px;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  font-size: 2em;
  text-align: right;
`;
