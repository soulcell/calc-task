import styled from "styled-components";

const StyledDropdownItem = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: ${({ theme }) => theme.paddings.zero}
    ${({ theme }) => theme.paddings.m};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export default StyledDropdownItem;
