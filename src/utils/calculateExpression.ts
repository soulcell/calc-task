import {
  CalculatorCommand,
  CalculatorCommandSymbol,
  createCommandFromObject,
} from "../commands";

import precendence from "./operatorPrecedence";
import {
  isLeftParenthesisToken,
  isNumericToken,
  isOperatorToken,
  isRightParenthesisToken,
} from "./tokenValidation";

function toPostfixNotation(infix: string[]) {
  const outputQueue: string[] = [];
  const stack: string[] = [];

  infix.forEach((token) => {
    if (isNumericToken(token)) {
      outputQueue.push(token);
    } else if (isOperatorToken(token)) {
      while (
        stack[stack.length - 1] &&
        precendence[stack[stack.length - 1]] >= precendence[token]
      ) {
        outputQueue.push(stack.pop() as string);
      }
      stack.push(token);
    } else if (isLeftParenthesisToken(token)) {
      stack.push(token);
    } else if (isRightParenthesisToken(token)) {
      while (
        stack[stack.length - 1] &&
        !isLeftParenthesisToken(stack[stack.length - 1])
      ) {
        outputQueue.push(stack.pop() as string);
      }
      stack.pop();
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

      if (operand1 === undefined || operand2 === undefined) {
        throw new Error("Failed to create tree");
      }

      const command: CalculatorCommand = createCommandFromObject({
        operator: token as CalculatorCommandSymbol,
        operand1,
        operand2,
      });

      stack.push(command);
    }
  });
  return stack[0];
}

export default function calculateExpression(tokens: string[]) {
  const postfixTokens = toPostfixNotation(tokens);
  const commandTree = createCommandTree(postfixTokens);
  return typeof commandTree === "number" ? commandTree : commandTree.execute();
}
