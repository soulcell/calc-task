import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "@/components/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";
import { setTheme } from "@/store/actionCreators/settings";
import selectSettings from "@/store/selectors/settings";
import { THEMES } from "@/styled/theme";

import { Title } from "./styled";

export default function ThemeDropdown(): JSX.Element {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector(selectSettings);

  const handleThemeChange = useCallback(
    (newTheme: string) => dispatch(setTheme({ theme: newTheme })),
    [dispatch]
  );

  return (
    <>
      <Title>Theme</Title>
      <Dropdown
        onSelectedValueChanged={handleThemeChange}
        testingAttribute="themeDropdown"
      >
        {Object.keys(THEMES).map((key) => (
          <DropdownItem
            title={THEMES[key].name}
            value={key}
            key={key}
            default={currentTheme === key}
          />
        ))}
      </Dropdown>
    </>
  );
}
