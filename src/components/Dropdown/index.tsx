import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import SVG from "@components/SVG";

import { DropdownItemProps } from "./DropdownItem";
import { DropdownButton, DropdownList, StyledDropdown } from "./styled";

export interface DropdownProps {
  children: React.ReactNode;
  onSelectedValueChanged?: (value: string) => void;
  dataCy?: string;
}

export default function Dropdown({
  children,
  onSelectedValueChanged,
  dataCy,
}: DropdownProps): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const triggerRef = useRef<HTMLDivElement>(null);
  const clickHandler = useCallback(
    (e: Event) => {
      if (!triggerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    },
    [triggerRef]
  );

  useEffect(() => {
    const el = Children.toArray(children)[selectedIndex];
    if (isValidElement<DropdownItemProps>(el)) {
      setSelectedValue(el.props.value);
      setSelectedTitle(el.props.title);
    }
  }, [selectedIndex, children]);

  useEffect(() => {
    if (onSelectedValueChanged) {
      onSelectedValueChanged(selectedValue);
    }
  }, [selectedValue, onSelectedValueChanged]);

  useEffect(() => {
    let idx = 0;
    Children.forEach(children, (child, index) => {
      if (isValidElement<DropdownItemProps>(child)) {
        if (child.props.default) {
          idx = index;
        }
      }
    });
    setSelectedIndex(idx);

    document.addEventListener("mousedown", clickHandler);
    return () => document.removeEventListener("mousedown", clickHandler);
  }, []);

  return (
    <StyledDropdown ref={triggerRef} data-cy={dataCy}>
      <DropdownButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <span>{selectedTitle}</span>
        <SVG icon="arrow" width="24px" height="24px" />
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {Children.map(children, (child, idx) => {
          if (isValidElement(child)) {
            return cloneElement(child as ReactElement<DropdownItemProps>, {
              isSelected: idx === selectedIndex,
              onClick: () => {
                setSelectedIndex(idx);
                setOpen(false);
              },
            });
          }
        })}
      </DropdownList>
    </StyledDropdown>
  );
}
