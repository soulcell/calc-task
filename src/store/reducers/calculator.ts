import { createReducer } from "@reduxjs/toolkit";

import * as actions from "@/store/actionCreators/calculator";
import { CalculatorState } from "@/types/states";
import appendOrAddNewDigit from "@/utils/appendOrAddNewDigit";
import calculateExpression from "@/utils/calculateExpression";
import prepareExpressionBeforeExecute from "@/utils/prepareExpressionBeforeExecute";
import { isNumericToken } from "@/utils/tokenValidation";

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
        state.tokens = prepareExpressionBeforeExecute(state.tokens);
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
        appendOrAddNewDigit(tokens, payload.token);
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
