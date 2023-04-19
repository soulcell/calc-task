import ControlPanel from "@/components/ControlPanel";
import Display from "@/components/Display";
import History from "@/components/History";
import Keypad from "@/components/Keypad";

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
