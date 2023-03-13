import { createAction } from "@reduxjs/toolkit";
import { CalculatorCommand } from "../../commands/calculatorCommands";
import { ButtonDigit } from "../../utils/buttonTypes";

export const setValue = createAction<{ value: number }>("SET_VALUE");

export const appendDigit = createAction<{ digit: ButtonDigit }>("APPEND_DIGIT");

export const clearAll = createAction("CLEAR_ALL");

export const clearValue = createAction("CLEAR_VALUE");

export const setCommand = createAction<{ command: CalculatorCommand }>(
  "SET_COMMAND"
);

export const executeCommand = createAction("EXECUTE_COMMAND");
