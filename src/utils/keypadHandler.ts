import { appendDigit } from "../store/actionCreators/calculatorActionCreators";
import { AppDispatch } from "../store/store";
import ButtonType, { isButtonDigit } from "./buttonTypes";

export default function keypadHandler(
  buttonType: ButtonType,
  dispatch: AppDispatch
) {
  console.log(`Pressed ${buttonType}`);
  if (isButtonDigit(buttonType)) {
    dispatch(appendDigit(buttonType));
  }
}
