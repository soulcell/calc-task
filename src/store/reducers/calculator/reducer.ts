import * as actions from "@actionCreators/calculatorActionCreators";
import { createReducer } from "@reduxjs/toolkit";
import calculateExpression from "@utils/calculateExpression";
import preExecute from "@utils/preExecute";
import { isNumericToken } from "@utils/tokenValidation";

export interface CalculatorState {
  tokens: Array<string>;
  value: number;
  errorMessage?: string;
}

const initialState: CalculatorState = {
  tokens: [],
  value: 0,
};

const calculatorReducer = createReducer<CalculatorState>(
  initialState,
  (builder) => {
    builder
      .addCase(actions.clearAll, () => initialState)
      .addCase(actions.clearValue, (state) => {
        state.errorMessage = initialState.errorMessage;
        state.value = initialState.value;
        state.tokens.pop();
      })
      .addCase(actions.executeCommand, (state) => {
        state.tokens = preExecute(state.tokens);
        try {
          state.value = calculateExpression(state.tokens);
        } catch (error) {
          console.error(error);
          state.errorMessage = (error as Error).message;
        }
        state.tokens = initialState.tokens;
      })
      .addCase(actions.changeSign, (state) => {
        let lastToken = state.tokens[state.tokens.length - 1];

        if (isNumericToken(lastToken)) {
          lastToken =
            lastToken.charAt(0) === "-" ? lastToken.slice(1) : `-${lastToken}`;
          state.tokens[state.tokens.length - 1] = lastToken;
        }
      })
      .addCase(actions.appendNumericToken, (state, { payload }) => {
        state.errorMessage = initialState.errorMessage;
        const { tokens } = state;
        if (isNumericToken(tokens[tokens.length - 1])) {
          if (isNumericToken(tokens[tokens.length - 1] + payload.token)) {
            tokens[tokens.length - 1] += payload.token;
          }
        } else tokens.push(payload.token);
      })
      .addCase(actions.appendOperatorToken, (state, { payload }) => {
        state.tokens.push(payload.token);
      })
      .addCase(actions.appendParenthesisToken, (state, { payload }) => {
        state.errorMessage = initialState.errorMessage;
        state.tokens.push(payload.token);
      });
  }
);

export default calculatorReducer;
