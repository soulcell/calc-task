export function isNumericToken(token: string) {
  return /^-?([1-9]\d*(\.)\d*|0?(\.)\d*|[1-9]\d*|0)$/.test(token);
}

export function isOperatorToken(token: string) {
  return /[+\-*/%]/.test(token);
}

export function isParenthesisToken(token: string) {
  return /\(\)/.test(token);
}
