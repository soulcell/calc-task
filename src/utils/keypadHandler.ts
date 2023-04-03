import {
  AddCommand,
  CalculatorCommand,
  DivideCommand,
  MultiplyCommand,
  RemainderCommand,
  SubtractCommand,
} from "../commands/calculatorCommands";
import {
  appendDigit,
  appendNumericToken,
  appendOperatorToken,
  changeSign,
  clearAll,
  clearValue,
  executeCommand,
  putSeparator,
  setCommand,
} from "../store/actionCreators/calculatorActionCreators";
import { CalculatorState } from "../store/reducers/calculator/reducer";
import { AppDispatch } from "../store";
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
  if (isButtonDigit(buttonType)) {
    //dispatch(appendDigit({ digit: buttonType }));
    dispatch(appendNumericToken({ token: buttonType }));
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
    //dispatch(setCommand({ command: command.toPlainObject() }));
    dispatch(appendOperatorToken({ token: buttonType }));
  } else if (isButtonPoint(buttonType)) {
    //dispatch(putSeparator());
    dispatch(appendNumericToken({ token: "." }));
  }
}
