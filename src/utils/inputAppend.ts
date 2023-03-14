export default function inputAppend(input: string, appendVal: string): string {
  const newInput = input + appendVal;
  const regexp = new RegExp(/^([1-9]\d*(\.)\d*|0?(\.)\d*|[1-9]\d*|0)$/);
  return regexp.test(newInput) ? newInput : input;
}
