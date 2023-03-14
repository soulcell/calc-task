import {
  AddCommand,
  CalculatorCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from "../commands/calculatorCommands";
import {
  appendDigit,
  changeSign,
  clearAll,
  clearValue,
  executeCommand,
  putSeparator,
  setCommand,
} from "../store/actionCreators/calculatorActionCreators";
import { CalculatorState } from "../store/reducers/calculator/reducer";
import { AppDispatch } from "../store/store";
import ButtonType, {
  isButtonAction,
  isButtonDigit,
  isButtonOperator,
  isButtonPoint,
} from "./buttonTypes";

export default function keypadHandler(
  buttonType: ButtonType,
  dispatch: AppDispatch,
  state: CalculatorState
) {
  console.log(`Pressed ${buttonType}`);
  if (isButtonDigit(buttonType)) {
    dispatch(appendDigit({ digit: buttonType }));
  } else if (isButtonAction(buttonType)) {
    switch (buttonType) {
      case "C":
        dispatch(clearAll());
        break;
      case "=":
        dispatch(executeCommand());
        break;
      case "CE":
        dispatch(clearValue());
        break;
      case "±":
        dispatch(changeSign());
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
    dispatch(setCommand({ command: command.toPlainObject() }));
  } else if (isButtonPoint(buttonType)) {
    dispatch(putSeparator());
  }
}
