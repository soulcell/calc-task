import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../../components/Dropdown";
import DropdownItem from "../../components/Dropdown/DropdownItem";
import Header from "../../components/Header";
import { setTheme } from "../../store/actionCreators/settingsActionCreators";
import selectSettings from "../../store/reducers/settings/selector";

import { Title, Wrapper } from "./styled";

export default function SettingsPage(): JSX.Element {
  const dispatch = useDispatch();
  const { currentTheme: theme } = useSelector(selectSettings);

  return (
    <>
      <Header />
      <Wrapper>
        <Title>Settings</Title>
        <span>Theme</span>
        <Dropdown
          onSelectedValueChanged={(newTheme) =>
            dispatch(setTheme({ theme: newTheme }))
          }
          id="themeDropdown"
        >
          <DropdownItem
            title="Light theme"
            value="light"
            default={!!(theme === "light")}
          />
          <DropdownItem
            title="Dark theme"
            value="dark"
            default={!!(theme === "dark")}
          />
        </Dropdown>
      </Wrapper>
    </>
  );
}
