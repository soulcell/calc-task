import React from "react";
import ControlPanelCC from "@components/ControlPanel/class";
import DisplayCC from "@components/Display/class";
import HistoryCC from "@components/History/class";
import KeypadCC from "@components/Keypad/class";

import StyledCalculator from "./styled";

class CalculatorCC extends React.PureComponent {
  render() {
    return (
      <>
        <ControlPanelCC />
        <StyledCalculator>
          <DisplayCC />
          <KeypadCC />
          <HistoryCC />
        </StyledCalculator>
      </>
    );
  }
}

export default CalculatorCC;
