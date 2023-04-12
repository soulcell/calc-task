import CalculatorCommand from "./calculatorCommand";

class RemainderCommand extends CalculatorCommand {
  public readonly operator = "%";

  constructor(
    public operand1: number | CalculatorCommand,
    public operand2: number | CalculatorCommand
  ) {
    super();
  }

  public execute(): number {
    this.executeOperands();
    const operand1 = this.operand1 as number;
    const operand2 = this.operand2 as number;
    if (this.operand2 === 0) throw new Error("Division by zero");
    return ((operand1 % operand2) + operand2) % operand2;
  }
}

export default RemainderCommand;
