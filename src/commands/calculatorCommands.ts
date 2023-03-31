export type CalculatorCommandSymbol = "+" | "-" | "*" | "/" | "%";

export type CalculatorCommandPlain = {
  symbol: CalculatorCommandSymbol;
  operand: number;
};

export abstract class CalculatorCommand implements CalculatorCommandPlain {
  public abstract operand: number;
  public abstract readonly symbol: CalculatorCommandSymbol;
  public abstract execute(currentValue: number): number;
  public toPlainObject() {
    return {
      symbol: this.symbol,
      operand: this.operand,
    };
  }

  static fromObject({
    symbol,
    operand,
  }: ReturnType<CalculatorCommand["toPlainObject"]>): CalculatorCommand {
    switch (symbol) {
      case "+":
        return new AddCommand(operand);
      case "-":
        return new SubtractCommand(operand);
      case "*":
        return new MultiplyCommand(operand);
      case "/":
        return new DivideCommand(operand);
      case "%":
        return new RemainderCommand(operand);
      default:
        throw new Error("Failed to convert");
    }
  }
}

export class AddCommand extends CalculatorCommand {
  public readonly symbol = "+";

  constructor(public operand: number) {
    super();
  }

  execute(currentValue: number): number {
    return currentValue + this.operand;
  }
}

export class SubtractCommand extends CalculatorCommand {
  public readonly symbol = "-";

  constructor(public operand: number) {
    super();
  }

  execute(currentValue: number): number {
    return this.operand - currentValue;
  }
}

export class MultiplyCommand extends CalculatorCommand {
  public readonly symbol = "*";

  constructor(public operand: number) {
    super();
  }

  execute(currentValue: number): number {
    return currentValue * this.operand;
  }
}

export class DivideCommand extends CalculatorCommand {
  public readonly symbol = "/";

  constructor(public operand: number) {
    super();
  }

  execute(currentValue: number): number {
    return this.operand / currentValue;
  }
}

export class RemainderCommand extends CalculatorCommand {
  public readonly symbol = "%";

  constructor(public operand: number) {
    super();
  }

  public execute(currentValue: number): number {
    return ((this.operand % currentValue) + currentValue) % currentValue;
  }
}
