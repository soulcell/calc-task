import { isNumericToken } from "./tokenValidation";

export default function appendOrAddNewDigit(
  tokens: string[],
  tokenToAppend: string
) {
  if (isNumericToken(tokens[tokens.length - 1])) {
    if (isNumericToken(tokens[tokens.length - 1] + tokenToAppend)) {
      tokens[tokens.length - 1] += tokenToAppend;
    }
  } else tokens.push(tokenToAppend);
}
