import {
  isLeftParenthesisToken,
  isNumericToken,
  isRightParenthesisToken,
} from "./tokenValidation";

function insertMultiplicationSign(tokens: string[], index: number) {
  return [...tokens.slice(0, index + 1), "*", ...tokens.slice(index + 1)];
}

export default function preExecute(tokens: string[]) {
  let newTokens = [...tokens];

  for (let i = 0; i < newTokens.length - 1; i += 1) {
    const currentToken = tokens[i];
    const nextToken = tokens[i + 1];
    if (
      (isRightParenthesisToken(currentToken) &&
        (isNumericToken(nextToken) || isLeftParenthesisToken(nextToken))) ||
      (isLeftParenthesisToken(nextToken) &&
        (isNumericToken(currentToken) || isRightParenthesisToken(currentToken)))
    ) {
      newTokens = insertMultiplicationSign(tokens, i);
    }

    if (newTokens[i] === ".") newTokens[i] = ".0";
  }
  if (newTokens.at(-1) === ".") {
    newTokens[newTokens.length - 1] = ".0";
  }

  return newTokens;
}
