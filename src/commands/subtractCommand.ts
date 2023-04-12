import CalculatorCommand from "./calculatorCommand";

class SubtractCommand extends CalculatorCommand {
  public readonly operator = "-";

  constructor(
    public operand1: number | CalculatorCommand,
    public operand2: number | CalculatorCommand
  ) {
    super();
  }

  execute(): number {
    this.executeOperands();
    return (this.operand1 as number) - (this.operand2 as number);
  }
}

export default SubtractCommand;
