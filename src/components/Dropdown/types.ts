export interface DropdownProps {
  children: React.ReactNode;
  onSelectedValueChanged?: (value: string) => void;
  dataCy?: string;
}
