import SVG from "@/components/SVG";

import {
  DropdownButton,
  DropdownList,
  SelectedTitle,
  StyledDropdown,
} from "./styled";
import { DropdownProps } from "./types";
import useDropdown from "./useDropdown";

export default function Dropdown({
  children,
  onSelectedValueChanged,
  dataCy,
}: DropdownProps): JSX.Element {
  const { dropdownItems, selectedTitle, isOpen, toggleOpen, triggerRef } =
    useDropdown(children, onSelectedValueChanged);

  return (
    <StyledDropdown ref={triggerRef} data-cy={dataCy}>
      <DropdownButton isOpen={isOpen} onClick={toggleOpen}>
        <SelectedTitle>{selectedTitle}</SelectedTitle>
        <SVG icon="arrow" width="24px" height="24px" />
      </DropdownButton>
      <DropdownList isOpen={isOpen}>{dropdownItems}</DropdownList>
    </StyledDropdown>
  );
}
