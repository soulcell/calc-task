import React from "react";

import ControlPanelCC from "../ControlPanel/class";
import DisplayCC from "../Display/class";
import HistoryCC from "../History/class";
import KeypadCC from "../Keypad/class";

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
