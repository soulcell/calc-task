export interface ICalculatorCommand {
  execute(currentValue: number): number;
  undo(currentValue: number): number;
}

export class AddCommand implements ICalculatorCommand {
  constructor(private valueToAdd: number) {}

  execute(currentValue: number): number {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue: number): number {
    return currentValue - this.valueToAdd;
  }
}

export class SubtractCommand implements ICalculatorCommand {
  constructor(private valueToSubtract: number) {}

  execute(currentValue: number): number {
    return currentValue - this.valueToSubtract;
  }
  undo(currentValue: number): number {
    return currentValue + this.valueToSubtract;
  }
}

export class MultiplyCommand implements ICalculatorCommand {
  constructor(private valueToMultiply: number) {}

  execute(currentValue: number): number {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue: number): number {
    return currentValue / this.valueToMultiply;
  }
}

export class DivideCommand implements ICalculatorCommand {
  constructor(private valueToDivide: number) {}

  execute(currentValue: number): number {
    return currentValue / this.valueToDivide;
  }

  undo(currentValue: number): number {
    return currentValue * this.valueToDivide;
  }
}
