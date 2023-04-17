import styled from "styled-components";

export const StyledDropdown = styled.div`
  width: 200px;
  position: relative;
`;

export const DropdownButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7em;
  padding: ${({ theme }) => theme.paddings.s};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  background-color: ${({ theme }) => theme.colors.button};
  cursor: pointer;

  & svg {
    transition: transform 0.2s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "initial")};
  }
`;

export const DropdownList = styled.ul<{ isOpen: boolean }>`
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  margin: ${({ theme }) => theme.margins.zero};
  top: calc(100% + 8px);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  overflow: auto;
  max-height: 50vh;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  list-style: none;
  padding: ${({ theme }) => theme.paddings.zero};
`;

export const DropdownTitle = styled.span`
  font-size: 0.7em;
  margin: ${({ theme }) => {
    const { xs, s } = theme.margins;
    return `${s} ${s} ${xs} ${s}`;
  }};
`;
