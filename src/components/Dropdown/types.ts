export interface DropdownProps {
  children: React.ReactNode;
  onSelectedValueChanged?: (value: string) => void;
  testingAttribute?: string;
}

export interface DropdownState {
  isOpen: boolean;
  selectedIndex: number;
  selectedValue: string;
  selectedTitle: string;
}
