import Display from "../Display";
import Keypad from "../Keypad";
import History from "../History";
import { StyledCalculator } from "./styled";
import ControlPanel from "../ControlPanel";

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
