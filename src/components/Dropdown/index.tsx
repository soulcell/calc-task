import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";

import SVG from "@/components/SVG";
import useClickOutside from "@/hooks/useClickOutside";

import { DropdownItemProps } from "./DropdownItem/types";
import {
  DropdownButton,
  DropdownList,
  SelectedTitle,
  StyledDropdown,
} from "./styled";
import { DropdownProps } from "./types";

export default function Dropdown({
  children,
  onSelectedValueChanged,
  dataCy,
}: DropdownProps): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleClickOutside = useCallback(() => setOpen(false), []);
  const triggerRef = useClickOutside<HTMLDivElement>(handleClickOutside);

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
  }, []);

  const toggleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);

  return (
    <StyledDropdown ref={triggerRef} data-cy={dataCy}>
      <DropdownButton isOpen={isOpen} onClick={toggleOpen}>
        <SelectedTitle>{selectedTitle}</SelectedTitle>
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
