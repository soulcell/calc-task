import ControlPanel from "../ControlPanel";
import Display from "../Display";
import History from "../History";
import Keypad from "../Keypad";

import StyledCalculator from "./styled";

export default function Calculator(): JSX.Element {
  return (
    <>
      <ControlPanel />
      <StyledCalculator>
        <Display />
        <Keypad />
        <History />
      </StyledCalculator>
    </>
  );
}
