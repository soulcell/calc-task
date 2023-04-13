export type DropdownItemProps = {
  title: string;
  isSelected?: boolean;
  default?: boolean;
  value: string;
  onClick?: () => void;
};
