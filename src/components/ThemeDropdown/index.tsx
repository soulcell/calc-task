import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@actionCreators/settingsActionCreators";
import Dropdown from "@components/Dropdown";
import DropdownItem from "@components/Dropdown/DropdownItem";
import selectSettings from "@store/selectors/settings";
import { THEMES } from "@styled/theme";

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
