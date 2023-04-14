const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
export type ButtonDigit = (typeof DIGITS)[number];

const OPERATORS = ["+", "-", "*", "/", "%"] as const;
export type ButtonOperator = (typeof OPERATORS)[number];

const ACTIONS = ["±", "=", "C", "CE"] as const;
export type ButtonAction = (typeof ACTIONS)[number];

const PARENTHESES = ["(", ")"] as const;
export type ButtonParenthesis = (typeof PARENTHESES)[number];

export type ButtonPoint = ".";

type ButtonType =
  | ButtonDigit
  | ButtonPoint
  | ButtonOperator
  | ButtonAction
  | ButtonParenthesis;
export default ButtonType;

export function isButtonDigit(x: unknown): x is ButtonDigit {
  return DIGITS.includes(x as ButtonDigit);
}

export function isButtonPoint(x: unknown): x is ButtonPoint {
  return x === ".";
}

export function isButtonOperator(x: unknown): x is ButtonOperator {
  return OPERATORS.includes(x as ButtonOperator);
}

export function isButtonAction(x: unknown): x is ButtonAction {
  return ACTIONS.includes(x as ButtonAction);
}

export function isButtonParenthesis(x: unknown): x is ButtonParenthesis {
  return PARENTHESES.includes(x as ButtonParenthesis);
}

export function isButtonType(x: unknown): x is ButtonType {
  return (
    isButtonDigit(x) ||
    isButtonOperator(x) ||
    isButtonAction(x) ||
    isButtonPoint(x) ||
    isButtonParenthesis(x)
  );
}
