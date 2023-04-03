export type CalculatorCommandSymbol = "+" | "-" | "*" | "/" | "%";

export type CalculatorCommandPlain = {
  operator: CalculatorCommandSymbol;
  operand1: number | CalculatorCommandPlain;
  operand2: number | CalculatorCommandPlain;
};

export abstract class CalculatorCommand implements CalculatorCommandPlain {
  public abstract operand1: number | CalculatorCommand;
  public abstract operand2: number | CalculatorCommand;
  public abstract readonly operator: CalculatorCommandSymbol;

  public abstract execute(): number;

  protected executeOperands(): void {
    if (typeof this.operand1 !== "number") {
      this.operand1 = this.operand1.execute();
    }
    if (typeof this.operand2 !== "number") {
      this.operand2 = this.operand2.execute();
    }
  }

  public toPlainObject(): CalculatorCommandPlain {
    const operand1 =
      typeof this.operand1 === "number"
        ? this.operand1
        : this.operand1.toPlainObject();
    const operand2 =
      typeof this.operand2 === "number"
        ? this.operand2
        : this.operand2.toPlainObject();
    return {
      operator: this.operator,
      operand1,
      operand2,
    };
  }

  static fromObject({
    operator,
    operand1,
    operand2,
  }: ReturnType<CalculatorCommand["toPlainObject"]>): CalculatorCommand {
    const newOperand1 =
      typeof operand1 === "number" ? operand1 : this.fromObject(operand1);
    const newOperand2 =
      typeof operand2 === "number" ? operand2 : this.fromObject(operand2);
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
}

export class AddCommand extends CalculatorCommand {
  public readonly operator = "+";

  constructor(
    public operand1: number | CalculatorCommand,
    public operand2: number | CalculatorCommand
  ) {
    super();
  }

  execute(): number {
    this.executeOperands();
    return (this.operand1 as number) + (this.operand2 as number);
  }
}

export class SubtractCommand extends CalculatorCommand {
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

export class MultiplyCommand extends CalculatorCommand {
  public readonly operator = "*";

  constructor(
    public operand1: number | CalculatorCommand,
    public operand2: number | CalculatorCommand
  ) {
    super();
  }

  execute(): number {
    this.executeOperands();
    return (this.operand1 as number) * (this.operand2 as number);
  }
}

export class DivideCommand extends CalculatorCommand {
  public readonly operator = "/";

  constructor(
    public operand1: number | CalculatorCommand,
    public operand2: number | CalculatorCommand
  ) {
    super();
  }

  execute(): number {
    this.executeOperands();
    return (this.operand1 as number) / (this.operand2 as number);
  }
}

export class RemainderCommand extends CalculatorCommand {
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
    return ((operand1 % operand2) + operand2) % operand2;
  }
}
