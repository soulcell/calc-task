import styled from "styled-components";

export const StyledDropdown = styled.div`
  width: 200px;
  position: relative;
`;

export const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7em;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.button};
  cursor: pointer;

  & svg {
    transition: transform 0.2s;
  }

  .isOpen & svg {
    transform: rotate(180deg);
  }
`;

export const DropdownList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  margin: 0;
  top: calc(100% + 8px);
  display: none;
  overflow: auto;
  max-height: 50vh;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  list-style: none;
  padding: 0;

  .isOpen & {
    display: block;
  }
`;

export const DropdownTitle = styled.span`
  font-size: 0.7em;
  margin: 8px 8px 4px 8px;
`;
