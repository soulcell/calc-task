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

export const StyledRecord = styled.div`
  font-size: 0.5em;
  margin: 10px 20px;
  padding: 8px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.button};
  }
`;

export const RecordResult = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;
