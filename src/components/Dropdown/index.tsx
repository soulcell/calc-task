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
import { DropdownItemProps } from "./DropdownItem";
import { DropdownButton, DropdownList, StyledDropdown } from "./styled";

export interface DropdownProps {
  children?: React.ReactNode;
  onSelectedValueChanged?: (value: string) => void;
}

export default function Dropdown({
  children,
  onSelectedValueChanged,
}: DropdownProps): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>();

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
    <StyledDropdown ref={triggerRef} className={isOpen ? "isOpen" : ""}>
      <DropdownButton onClick={() => setOpen(!isOpen)}>
        <span>{selectedTitle}</span>
        <ArrowIcon />
      </DropdownButton>
      <DropdownList>
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

function ArrowIcon(): JSX.Element {
  return (
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
        d="M6 9l6 6 6-6"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
