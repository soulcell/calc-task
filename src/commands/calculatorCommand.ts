import { CalculatorCommandPlain, CalculatorCommandSymbol } from "./types";

abstract class CalculatorCommand implements CalculatorCommandPlain {
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
}

export default CalculatorCommand;
