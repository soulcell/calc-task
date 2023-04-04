import { createReducer } from "@reduxjs/toolkit";
import {
  CalculatorCommand,
  CalculatorCommandPlain,
} from "../../../commands/calculatorCommands";
import calculateExpression from "../../../utils/calculateExpression";
import inputAppend from "../../../utils/inputAppend";
import {
  isNumericToken,
  isOperatorToken,
} from "../../../utils/tokenValidation";
import * as actions from "../../actionCreators/calculatorActionCreators";

export interface CalculatorState {
  tokens: Array<string>;
  value: number;
  input: string;
  command?: CalculatorCommandPlain;
}

const initialState: CalculatorState = {
  tokens: [],
  value: 0,
  input: "",
};

const calculatorReducer = createReducer<CalculatorState>(
  initialState,
  (builder) => {
    builder
      .addCase(actions.setValue, (state, action) => {
        state.value = action.payload.value;
      })
      .addCase(actions.clearAll, () => {
        return initialState;
      })
      .addCase(actions.clearValue, (state) => {
        state.value = initialState.value;
        state.input = initialState.input;
      })
      .addCase(actions.executeCommand, (state) => {
        //if (!state.command) return;
        state.value = calculateExpression(state.tokens);
        state.tokens = initialState.tokens;
        //state.input = initialState.input;
        //state.command = undefined;
      })
      .addCase(actions.putSeparator, (state) => {
        state.input = inputAppend(state.input, ".");
        state.value = isNaN(+state.input) ? 0 : +state.input;
      })
      .addCase(actions.changeSign, ({ tokens }) => {
        let lastToken = tokens[tokens.length - 1];

        if (isNumericToken(lastToken)) {
          lastToken =
            lastToken.charAt(0) === "-" ? lastToken.slice(1) : "-" + lastToken;
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
        if (tokens.length === 0) return;
        if (isOperatorToken(tokens[tokens.length - 1]))
          tokens[tokens.length - 1] = payload.token;
        else tokens.push(payload.token);
      });
  }
);

export default calculatorReducer;
