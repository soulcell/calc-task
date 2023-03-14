import styled from "styled-components";

export const StyledControlPanel = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const Button = styled.button`
  font-size: 0.5em;
  margin: 4px 10px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  padding: 2px 8px;
  &:hover {
    background-color: ${(props) => props.theme.border};
  }
`;
