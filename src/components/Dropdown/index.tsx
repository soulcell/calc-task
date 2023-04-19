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
import { DropdownProps, DropdownState } from "./types";

export default function Dropdown({
  children,
  onSelectedValueChanged,
  testingAttribute,
}: DropdownProps): JSX.Element {
  const [{ isOpen, selectedIndex, selectedValue, selectedTitle }, setState] =
    useState<DropdownState>({
      isOpen: false,
      selectedIndex: 0,
      selectedValue: "",
      selectedTitle: "",
    });

  const handleClickOutside = useCallback(
    () => setState((prevState) => ({ ...prevState, isOpen: false })),
    []
  );
  const triggerRef = useClickOutside<HTMLDivElement>(handleClickOutside);

  useEffect(() => {
    const selectedChild = Children.toArray(children)[selectedIndex];
    if (isValidElement<DropdownItemProps>(selectedChild)) {
      const { value, title } = selectedChild.props;
      setState((prevState) => ({
        ...prevState,
        selectedValue: value,
        selectedTitle: title,
      }));
    }
  }, [selectedIndex, children]);

  useEffect(() => {
    if (onSelectedValueChanged) {
      onSelectedValueChanged(selectedValue);
    }
  }, [selectedValue, onSelectedValueChanged]);

  useEffect(() => {
    let defaultSelectedIndex = 0;
    Children.forEach(children, (child, index) => {
      if (isValidElement<DropdownItemProps>(child)) {
        if (child.props.default) {
          defaultSelectedIndex = index;
        }
      }
    });
    setState((prevState) => ({
      ...prevState,
      selectedIndex: defaultSelectedIndex,
    }));
  }, []);

  const toggleOpen = useCallback(
    () => setState((prevState) => ({ ...prevState, isOpen: !isOpen })),
    [isOpen]
  );

  const dropdownItems = Children.map(children, (child, idx) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<DropdownItemProps>, {
        isSelected: idx === selectedIndex,
        onClick: () =>
          setState((prevState) => ({
            ...prevState,
            selectedIndex: idx,
            isOpen: false,
          })),
      });
    }
  });

  return (
    <StyledDropdown ref={triggerRef} data-cy={testingAttribute}>
      <DropdownButton isOpen={isOpen} onClick={toggleOpen}>
        <SelectedTitle>{selectedTitle}</SelectedTitle>
        <SVG icon="arrow" width="24px" height="24px" />
      </DropdownButton>
      <DropdownList isOpen={isOpen}>{dropdownItems}</DropdownList>
    </StyledDropdown>
  );
}
