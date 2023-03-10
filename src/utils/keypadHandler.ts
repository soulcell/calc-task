import {
  appendDigit,
  clearOperand,
} from "../store/actionCreators/calculatorActionCreators";
import { AppDispatch } from "../store/store";
import ButtonType, { isButtonAction, isButtonDigit } from "./buttonTypes";

export default function keypadHandler(
  buttonType: ButtonType,
  dispatch: AppDispatch
) {
  console.log(`Pressed ${buttonType}`);
  if (isButtonDigit(buttonType)) {
    dispatch(appendDigit(buttonType));
  } else if (isButtonAction(buttonType)) {
    switch (buttonType) {
      case "C":
        dispatch(clearOperand());
        break;
    }
  }
}
