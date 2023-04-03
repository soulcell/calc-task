import { isNumericToken, isOperatorToken } from "./tokenValidation";
import precendence from "./operatorPrecedence";
import {
  CalculatorCommand,
  CalculatorCommandSymbol,
} from "../commands/calculatorCommands";

export default function calculateExpression(tokens: string[]) {
  const postfixTokens = toPostfixNotation(tokens);
  const commandTree = createCommandTree(postfixTokens);
  return typeof commandTree === "number" ? commandTree : commandTree.execute();
}

function toPostfixNotation(infix: string[]) {
  const outputQueue: string[] = [];
  const stack: string[] = [];

  infix.forEach((token) => {
    if (isNumericToken(token)) outputQueue.push(token);
    else if (isOperatorToken(token)) {
      while (
        stack[stack.length - 1] &&
        precendence[stack[stack.length - 1]] >= precendence[token]
      ) {
        outputQueue.push(stack.pop() as string);
      }
      stack.push(token);
    }
  });

  while (stack.length > 0) {
    outputQueue.push(stack.pop() as string);
  }

  return outputQueue;
}

function createCommandTree(postfixTokens: string[]) {
  const stack: Array<CalculatorCommand | number> = [];

  postfixTokens.forEach((token) => {
    if (isNumericToken(token)) {
      stack.push(+token);
    } else if (isOperatorToken(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      if (!operand1 || !operand2) {
        throw new Error("Failed to create tree");
      }

      const command: CalculatorCommand = CalculatorCommand.fromObject({
        operator: token as CalculatorCommandSymbol,
        operand1,
        operand2,
      });

      stack.push(command);
    }
  });
  return stack[0];
}
