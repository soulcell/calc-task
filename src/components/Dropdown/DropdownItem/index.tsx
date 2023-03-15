import { StyledDropdownItem } from "./styled";

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
      {isSelected && (
        <svg
          width="24px"
          height="24px"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      )}
    </StyledDropdownItem>
  );
}
