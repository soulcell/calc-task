import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";

import useClickOutside from "@/hooks/useClickOutside";

import { DropdownItemProps } from "./DropdownItem/types";
import { DropdownState } from "./types";

export default function useDropdown(
  children: React.ReactNode,
  onSelectedValueChanged?: (value: string) => void
) {
  const [{ isOpen, selectedIndex, selectedValue, selectedTitle }, setState] =
    useState<DropdownState>({
      isOpen: false,
      selectedIndex: 0,
      selectedValue: "",
      selectedTitle: "",
    });

  const handleClickOutside = useCallback(
    () =>
      setState((prevState) => ({
        ...prevState,
        isOpen: false,
      })),
    []
  );

  const triggerRef = useClickOutside<HTMLDivElement>(handleClickOutside);

  useEffect(() => {
    const selectedChild = Children.toArray(children)[selectedIndex];
    if (isValidElement<DropdownItemProps>(selectedChild)) {
      setState((prevState) => ({
        ...prevState,
        selectedValue: selectedChild.props.value,
        selectedTitle: selectedChild.props.title,
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

  const toggleOpen = useCallback(
    () => setState((prevState) => ({ ...prevState, isOpen: !isOpen })),
    [isOpen]
  );

  return {
    dropdownItems,
    selectedTitle,
    selectedValue,
    selectedIndex,
    isOpen,
    toggleOpen,
    triggerRef,
  };
}
