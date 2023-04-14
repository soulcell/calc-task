import {
  appendNumericToken,
  appendOperatorToken,
  appendParenthesisToken,
  changeSign,
  clearAll,
  clearValue,
  executeCommand,
} from "@store/actionCreators/calculatorActionCreators";
import { AppDispatch } from "@store/index";

import ButtonType, {
  isButtonAction,
  isButtonDigit,
  isButtonOperator,
  isButtonParenthesis,
  isButtonPoint,
} from "./buttonTypes";

export default function keypadHandler(
  buttonType: ButtonType,
  dispatch: AppDispatch
) {
  if (isButtonDigit(buttonType)) {
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
      default:
        break;
    }
  } else if (isButtonOperator(buttonType)) {
    dispatch(appendOperatorToken({ token: buttonType }));
  } else if (isButtonPoint(buttonType)) {
    dispatch(appendNumericToken({ token: "." }));
  } else if (isButtonParenthesis(buttonType)) {
    dispatch(appendParenthesisToken({ token: buttonType }));
  }
}
