import {
  AddCommand,
  CalculatorCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from "../commands/calculatorCommands";
import {
  appendDigit,
  clearState,
  clearValue,
  executeCommand,
  setCommand,
} from "../store/actionCreators/calculatorActionCreators";
import { CalculatorState } from "../store/reducers/calculator/reducer";
import { AppDispatch } from "../store/store";
import ButtonType, {
  isButtonAction,
  isButtonDigit,
  isButtonOperator,
} from "./buttonTypes";

export default function keypadHandler(
  buttonType: ButtonType,
  dispatch: AppDispatch,
  state: CalculatorState
) {
  console.log(`Pressed ${buttonType}`);
  if (isButtonDigit(buttonType)) {
    dispatch(appendDigit(buttonType));
  } else if (isButtonAction(buttonType)) {
    switch (buttonType) {
      case "C":
        dispatch(clearState());
        break;
      case "=":
        dispatch(executeCommand());
        break;
      case "CE":
        dispatch(clearValue());
        break;
    }
  } else if (isButtonOperator(buttonType)) {
    let command: CalculatorCommand;
    switch (buttonType) {
      case "+":
        command = new AddCommand(state.value);
        break;
      case "-":
        command = new SubtractCommand(state.value);
        break;
      case "*":
        command = new MultiplyCommand(state.value);
        break;
      case "/":
        command = new DivideCommand(state.value);
        break;
    }
    dispatch(setCommand(command));
  }
}
