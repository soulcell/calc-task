export abstract class CalculatorCommand {
  public abstract operand: number;
  public abstract readonly symbol: string;
  abstract execute(currentValue: number): number;
  abstract undo(currentValue: number): number;
}

export class AddCommand extends CalculatorCommand {
  public readonly symbol = "+";

  constructor(public operand: number) {
    super();
  }

  execute(currentValue: number): number {
    return currentValue + this.operand;
  }

  undo(currentValue: number): number {
    return currentValue - this.operand;
  }
}

export class SubtractCommand extends CalculatorCommand {
  public readonly symbol = "-";

  constructor(public operand: number) {
    super();
  }

  execute(currentValue: number): number {
    return currentValue - this.operand;
  }
  undo(currentValue: number): number {
    return currentValue + this.operand;
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

  undo(currentValue: number): number {
    return currentValue / this.operand;
  }
}

export class DivideCommand extends CalculatorCommand {
  public readonly symbol = "/";

  constructor(public operand: number) {
    super();
  }

  execute(currentValue: number): number {
    return currentValue / this.operand;
  }

  undo(currentValue: number): number {
    return currentValue * this.operand;
  }
}
