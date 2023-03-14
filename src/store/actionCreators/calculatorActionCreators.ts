import { createAction } from "@reduxjs/toolkit";
import { CalculatorCommandPlain } from "../../commands/calculatorCommands";
import { ButtonDigit } from "../../utils/buttonTypes";

export const setValue = createAction<{ value: number }>("SET_VALUE");

export const appendDigit = createAction<{ digit: ButtonDigit }>("APPEND_DIGIT");

export const clearAll = createAction("CLEAR_ALL");

export const clearValue = createAction("CLEAR_VALUE");

export const setCommand = createAction<{ command: CalculatorCommandPlain }>(
  "SET_COMMAND"
);

export const executeCommand = createAction("EXECUTE_COMMAND");

export const putSeparator = createAction("PUT_SEPARTOR");

export const changeSign = createAction("CHANGE_SIGN");
