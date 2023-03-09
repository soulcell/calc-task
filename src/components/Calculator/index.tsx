import Display from "../Display";
import Keypad from "../Keypad";
import History from "../History";
import { StyledCalculator } from "./styled";

export default function Calculator(): JSX.Element {
  return (
    <StyledCalculator>
      <Display />
      <Keypad />
      <History />
    </StyledCalculator>
  );
}
