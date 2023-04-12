export type CalculatorCommandSymbol = "+" | "-" | "*" | "/" | "%";

export type CalculatorCommandPlain = {
  operator: CalculatorCommandSymbol;
  operand1: number | CalculatorCommandPlain;
  operand2: number | CalculatorCommandPlain;
};
