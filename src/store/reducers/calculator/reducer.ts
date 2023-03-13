import { CalculatorCommand } from "../../../commands/calculatorCommands";
import * as actions from "../../actionTypes/calculatorActionTypes";

export interface CalculatorState {
  value: number;
  command?: CalculatorCommand;
}

const initialState: CalculatorState = {
  value: 0,
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
        value: +(state.value.toString() + action.digit),
      };
    case actions.CLEAR:
      return {
        ...initialState,
      };
    case actions.SET_COMMAND:
      if (state.command) {
        action.command.operand = state.command.execute(state.value);
      }
      return {
        ...state,
        command: action.command,
        value: 0,
      };
    case actions.EXECUTE_COMMAND:
      if (!state.command)
        return {
          ...state,
        };
      return {
        ...state,
        value: state.command.execute(state.value),
        command: undefined,
      };
    default: {
      return state;
    }
  }
}
