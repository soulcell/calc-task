import styled from "styled-components";

export const StyledHistory = styled.div`
  grid-area: history;
  width: 300px;
  height: 100;
  border-left: 1px solid ${(props) => props.theme.border};
  overflow: auto;
`;

export const H2 = styled.h2`
  font-size: 1em;
  font-weight: normal;
  margin: 20px 0;
  text-align: center;
`;
