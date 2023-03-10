export type ButtonDigit =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";
export type ButtonPoint = ".";
export type ButtonOperator = "+" | "-" | "*" | "/";
export type ButtonAction = "=" | "C" | "CE";

type ButtonType = ButtonDigit | ButtonPoint | ButtonOperator | ButtonAction;
export default ButtonType;
