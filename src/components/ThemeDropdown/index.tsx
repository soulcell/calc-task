import { useDispatch, useSelector } from "react-redux";

import { setTheme } from "../../store/actionCreators/settingsActionCreators";
import selectSettings from "../../store/reducers/settings/selector";
import { THEMES } from "../../styled/theme";
import Dropdown from "../Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";

import { Title } from "./styled";

export default function ThemeDropdown(): JSX.Element {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector(selectSettings);

  const handleThemeChange = (newTheme: string) =>
    dispatch(setTheme({ theme: newTheme }));

  return (
    <>
      <Title>Theme</Title>
      <Dropdown
        onSelectedValueChanged={handleThemeChange}
        dataCy="themeDropdown"
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
