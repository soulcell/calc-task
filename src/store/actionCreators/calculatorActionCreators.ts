import { CalculatorCommand } from "../../commands/calculatorCommands";
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

export function clearState(): actions.ClearAction {
  return {
    type: actions.CLEAR,
  };
}

export function setCommand(
  command: CalculatorCommand
): actions.SetCommandAction {
  return {
    type: actions.SET_COMMAND,
    command,
  };
}

export function executeCommand(): actions.ExecuteCommandAction {
  return {
    type: actions.EXECUTE_COMMAND,
  };
}
