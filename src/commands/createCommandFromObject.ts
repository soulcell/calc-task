import AddCommand from "./addCommand";
import CalculatorCommand from "./calculatorCommand";
import DivideCommand from "./divideCommand";
import MultiplyCommand from "./multiplyCommand";
import RemainderCommand from "./remainderCommand";
import SubtractCommand from "./subtractCommand";

export default function createCommandFromObject({
  operator,
  operand1,
  operand2,
}: ReturnType<CalculatorCommand["toPlainObject"]>): CalculatorCommand {
  const newOperand1 =
    typeof operand1 === "number" ? operand1 : createCommandFromObject(operand1);
  const newOperand2 =
    typeof operand2 === "number" ? operand2 : createCommandFromObject(operand2);
  switch (operator) {
    case "+":
      return new AddCommand(newOperand1, newOperand2);
    case "-":
      return new SubtractCommand(newOperand1, newOperand2);
    case "*":
      return new MultiplyCommand(newOperand1, newOperand2);
    case "/":
      return new DivideCommand(newOperand1, newOperand2);
    case "%":
      return new RemainderCommand(newOperand1, newOperand2);
    default:
      throw new Error("Failed to convert");
  }
}
