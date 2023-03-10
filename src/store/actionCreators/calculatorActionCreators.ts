import { ButtonDigit } from "../../utils/buttonTypes";
import * as actions from "../actionTypes/calculatorActionTypes";

export function setValue(value: number): actions.SetValueAction {
  return {
    type: actions.SET_VALUE,
    value,
  };
}

export function appendDigit(digit: ButtonDigit): actions.AppendDigitAction {
  return {
    type: actions.APPEND_DIGIT,
    digit,
  };
}

export function clearOperand(): actions.ClearOperandAction {
  return {
    type: actions.CLEAR_OPERAND,
  };
}
