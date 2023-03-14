import { createReducer } from "@reduxjs/toolkit";
import {
  CalculatorCommand,
  CalculatorCommandPlain,
} from "../../../commands/calculatorCommands";
import inputAppend from "../../../utils/inputAppend";
import * as actions from "../../actionCreators/calculatorActionCreators";

export interface CalculatorState {
  value: number;
  input: string;
  command?: CalculatorCommandPlain;
}

const initialState: CalculatorState = {
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
      .addCase(actions.appendDigit, (state, action) => {
        state.input = inputAppend(state.input, action.payload.digit);
        state.value = isNaN(+state.input) ? 0 : +state.input;
      })
      .addCase(actions.clearAll, () => {
        return initialState;
      })
      .addCase(actions.clearValue, (state) => {
        state.value = initialState.value;
        state.input = initialState.input;
      })
      .addCase(actions.setCommand, (state, action) => {
        state.command = action.payload.command;
        state.value = initialState.value;
        state.input = initialState.input;
      })
      .addCase(actions.executeCommand, (state) => {
        if (!state.command) return;
        state.value = CalculatorCommand.fromObject(state.command).execute(
          state.value
        );
        state.input = initialState.input;
        state.command = undefined;
      })
      .addCase(actions.putSeparator, (state) => {
        state.input = inputAppend(state.input, ".");
        state.value = isNaN(+state.input) ? 0 : +state.input;
      })
      .addCase(actions.changeSign, (state) => {
        state.input =
          state.input[0] === "-" ? state.input.slice(1) : "-" + state.input;
        state.value = isNaN(+state.input) ? 0 : +state.input;
      });
  }
);

export default calculatorReducer;
