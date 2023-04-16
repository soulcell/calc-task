import { ACCURACY } from "@/constants/calculator";

export function isNumericToken(token: string) {
  const regex = new RegExp(
    `^-?([1-9]\\d*(\\.)\\d{0,${ACCURACY}}|0?(\\.)\\d{0,${ACCURACY}}|[1-9]\\d*|0)$`
  );
  return regex.test(token);
}

export function isOperatorToken(token: string) {
  return /^[+\-*/%]$/.test(token);
}

export function isLeftParenthesisToken(token: string) {
  return /\(/.test(token);
}

export function isRightParenthesisToken(token: string) {
  return /\)/.test(token);
}
