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

export type CalculatorAction = SetValueAction | AppendDigitAction;
