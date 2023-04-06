import styled from "styled-components";

export const StyledHistory = styled.div`
  grid-area: history;
  width: 300px;
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.border};
  overflow: auto;
  transition: width 0.07s;

  &.hidden {
    width: 0px;
    border: none;

    @media (max-width: 700px) {
      width: 100%;
      border-left: none;
      border-top: 1px solid ${({ theme }) => theme.border};
    }
  }

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
