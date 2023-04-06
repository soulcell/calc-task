import styled from "styled-components";

export const StyledHistory = styled.div<{ isHidden?: boolean }>`
  grid-area: history;
  height: 100%;
  overflow: auto;
  transition: width 0.07s;
  border-left: ${({ isHidden, theme }) =>
    isHidden ? "none" : `1px solid ${theme.border}`};
  width: ${({ isHidden }) => (isHidden ? "0px" : "300px")};

  @media (max-width: 700px) {
    width: 100%;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.border};
  }
`;

export const H2 = styled.h2`
  font-size: 1em;
  font-weight: normal;
  margin: 20px 0;
  text-align: center;
`;
