export interface DropdownProps {
  children: React.ReactNode;
  onSelectedValueChanged?: (value: string) => void;
  dataCy?: string;
}

export interface DropdownState {
  isOpen: boolean;
  selectedIndex: number;
  selectedValue: string;
  selectedTitle: string;
}
