import SVG from "@/components/SVG";

import StyledDropdownItem from "./styled";
import { DropdownItemProps } from "./types";

export default function DropdownItem({
  title,
  isSelected,
  onClick,
}: DropdownItemProps) {
  return (
    <StyledDropdownItem onClick={onClick}>
      <span>{title}</span>
      {isSelected && <SVG icon="check" width="24px" height="24px" />}
    </StyledDropdownItem>
  );
}
