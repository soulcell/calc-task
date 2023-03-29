import styled from "styled-components";

export const StyledControlPanel = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const Button = styled.button`
  font-size: 0.5em;
  margin: 4px 10px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.button};
  border-radius: 4px;
  padding: 2px 8px;
  &:hover {
    background-color: ${({ theme }) => theme.border};
  }
  &.hideOnMobile {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;
