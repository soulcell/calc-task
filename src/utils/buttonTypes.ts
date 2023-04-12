const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
export type ButtonDigit = (typeof DIGITS)[number];

const OPERATORS = ["+", "-", "*", "/", "%"] as const;
export type ButtonOperator = (typeof OPERATORS)[number];

const ACTIONS = ["±", "=", "C", "CE"] as const;
export type ButtonAction = (typeof ACTIONS)[number];

const PARENTHESES = ["(", ")"] as const;
export type ButtonParentheses = (typeof PARENTHESES)[number];

export type ButtonPoint = ".";

type ButtonType =
  | ButtonDigit
  | ButtonPoint
  | ButtonOperator
  | ButtonAction
  | ButtonParentheses;
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

export function isButtonParentheses(x: unknown): x is ButtonParentheses {
  return PARENTHESES.includes(x as ButtonParentheses);
}

export function isButtonType(x: unknown): x is ButtonType {
  return (
    isButtonDigit(x) ||
    isButtonOperator(x) ||
    isButtonAction(x) ||
    isButtonPoint(x) ||
    isButtonParentheses(x)
  );
}
