import React from "react";
import KeypadCC from "../Keypad/class";
import HistoryCC from "../History/class";
import DisplayCC from "../Display/class";
import { StyledCalculator } from "./styled";
import ControlPanelCC from "../ControlPanel/class";

class CalculatorCC extends React.Component {
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
