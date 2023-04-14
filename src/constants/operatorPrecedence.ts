const OPERATOR_PRECENDENCE: { [index: string]: number } = {
  "*": 3,
  "/": 3,
  "%": 3,
  "+": 2,
  "-": 2,
};

export default OPERATOR_PRECENDENCE;
