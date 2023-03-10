/* eslint-disable @typescript-eslint/no-explicit-any */
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
export type ButtonDigit = (typeof DIGITS)[number];

const OPERATORS = ["+", "-", "*", "/"] as const;
export type ButtonOperator = (typeof OPERATORS)[number];

const ACTIONS = ["=", "C", "CE"] as const;
export type ButtonAction = (typeof ACTIONS)[number];

export type ButtonPoint = ".";

type ButtonType = ButtonDigit | ButtonPoint | ButtonOperator | ButtonAction;
export default ButtonType;

export function isButtonDigit(x: any): x is ButtonDigit {
  return DIGITS.includes(x);
}

export function isButtonPoint(x: any): x is ButtonPoint {
  return x === ".";
}

export function isButtonOperator(x: any): x is ButtonOperator {
  return OPERATORS.includes(x);
}

export function isButtonAction(x: any): x is ButtonAction {
  return ACTIONS.includes(x);
}

export function isButtonType(x: any): x is ButtonType {
  return (
    isButtonDigit(x) ||
    isButtonOperator(x) ||
    isButtonAction(x) ||
    isButtonPoint(x)
  );
}
