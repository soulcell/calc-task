import SVG from "../../SVG";

import StyledDropdownItem from "./styled";

export type DropdownItemProps = {
  title: string;
  isSelected?: boolean;
  default?: boolean;
  value: string;
  onClick?: () => void;
};

export default function DropdownItem({
  title,
  isSelected,
  onClick,
}: DropdownItemProps) {
  return (
    <StyledDropdownItem onClick={onClick}>
      <span className="title">{title}</span>
      {isSelected && <SVG icon="check" width="24px" height="24px" />}
    </StyledDropdownItem>
  );
}
