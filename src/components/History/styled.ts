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

export const StyledRecord = styled.div`
  font-size: 0.5em;
  margin: 10px 20px;
  padding: 8px;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.button};
  }
`;

export const RecordResult = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;
