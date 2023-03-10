export interface CalculatorState {
  value: number;
}

const initialState: CalculatorState = {
  value: 0,
};

export default function calculatorReducer(
  state: CalculatorState = initialState
): CalculatorState {
  return state;
}
