import * as actions from "../../actionTypes/calculatorActionTypes";

export interface CalculatorState {
  value: number;
  operand: number;
}

const initialState: CalculatorState = {
  value: 0,
  operand: 0,
};

export default function calculatorReducer(
  state: CalculatorState = initialState,
  action: actions.CalculatorAction
): CalculatorState {
  switch (action.type) {
    case actions.SET_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case actions.APPEND_DIGIT:
      return {
        ...state,
        operand: +(state.operand.toString() + action.digit),
      };
    case actions.CLEAR_OPERAND:
      return {
        ...state,
        operand: 0,
      };
    default: {
      return state;
    }
  }
}
