import * as actions from "@actionCreators/calculatorActionCreators";
import { createReducer } from "@reduxjs/toolkit";
import calculateExpression from "@utils/calculateExpression";
import preExecute from "@utils/preExecute";
import { isNumericToken } from "@utils/tokenValidation";

export interface CalculatorState {
  tokens: Array<string>;
  value: number;
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
        state.value = initialState.value;
        state.tokens.pop();
      })
      .addCase(actions.executeCommand, (state) => {
        state.tokens = preExecute(state.tokens);
        state.value = calculateExpression(state.tokens);
        state.tokens = initialState.tokens;
      })
      .addCase(actions.changeSign, ({ tokens }) => {
        let lastToken = tokens[tokens.length - 1];

        if (isNumericToken(lastToken)) {
          lastToken =
            lastToken.charAt(0) === "-" ? lastToken.slice(1) : `-${lastToken}`;
          tokens[tokens.length - 1] = lastToken;
        }
      })
      .addCase(actions.appendNumericToken, ({ tokens }, { payload }) => {
        if (isNumericToken(tokens[tokens.length - 1])) {
          if (isNumericToken(tokens[tokens.length - 1] + payload.token)) {
            tokens[tokens.length - 1] += payload.token;
          }
        } else tokens.push(payload.token);
      })
      .addCase(actions.appendOperatorToken, ({ tokens }, { payload }) => {
        tokens.push(payload.token);
      })
      .addCase(actions.appendParenthesisToken, ({ tokens }, { payload }) => {
        tokens.push(payload.token);
      });
  }
);

export default calculatorReducer;
