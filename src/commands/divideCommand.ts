import CalculatorCommand from "./calculatorCommand";

class DivideCommand extends CalculatorCommand {
  public readonly operator = "/";

  constructor(
    public operand1: number | CalculatorCommand,
    public operand2: number | CalculatorCommand
  ) {
    super();
  }

  execute(): number {
    this.executeOperands();
    if (this.operand2 === 0) throw new Error("Division by zero");
    return (this.operand1 as number) / (this.operand2 as number);
  }
}

export default DivideCommand;
