import { CalculatorCommand } from "../../commands/calculatorCommands";
import { ButtonDigit } from "../../utils/buttonTypes";

export const SET_VALUE = "SET_VALUE";
export interface SetValueAction {
  type: typeof SET_VALUE;
  value: number;
}

export const APPEND_DIGIT = "APPEND_DIGIT";
export interface AppendDigitAction {
  type: typeof APPEND_DIGIT;
  digit: ButtonDigit;
}

export const CLEAR = "CLEAR";
export interface ClearAction {
  type: typeof CLEAR;
}

export const SET_COMMAND = "SET_COMMAND";
export interface SetCommandAction {
  type: typeof SET_COMMAND;
  command: CalculatorCommand;
}

export const EXECUTE_COMMAND = "EXECUTE_COMMAND";
export interface ExecuteCommandAction {
  type: typeof EXECUTE_COMMAND;
}

export type CalculatorAction =
  | SetValueAction
  | AppendDigitAction
  | ClearAction
  | SetCommandAction
  | ExecuteCommandAction;
