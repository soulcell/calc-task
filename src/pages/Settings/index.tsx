import Header from "../../components/Header";
import ThemeDropdown from "../../components/ThemeDropdown";

import { Title, Wrapper } from "./styled";

export default function SettingsPage(): JSX.Element {
  return (
    <>
      <Header />
      <Wrapper>
        <Title>Settings</Title>
        <ThemeDropdown />
      </Wrapper>
    </>
  );
}
