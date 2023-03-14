import { createReducer } from "@reduxjs/toolkit";
import {
  CalculatorCommand,
  CalculatorCommandPlain,
} from "../../../commands/calculatorCommands";
import * as actions from "../../actionCreators/calculatorActionCreators";

export interface CalculatorState {
  value: number;
  command?: CalculatorCommandPlain;
}

const initialState: CalculatorState = {
  value: 0,
};

const calculatorReducer = createReducer<CalculatorState>(
  initialState,
  (builder) => {
    builder
      .addCase(actions.setValue, (state, action) => {
        state.value = action.payload.value;
      })
      .addCase(actions.appendDigit, (state, action) => {
        state.value = +(state.value.toString() + action.payload.digit);
      })
      .addCase(actions.clearAll, () => {
        return initialState;
      })
      .addCase(actions.clearValue, (state) => {
        state.value = initialState.value;
      })
      .addCase(actions.setCommand, (state, action) => {
        state.command = action.payload.command;
        state.value = initialState.value;
      })
      .addCase(actions.executeCommand, (state) => {
        if (!state.command) return;
        state.value = CalculatorCommand.fromObject(state.command).execute(
          state.value
        );
        state.command = undefined;
      });
  }
);

export default calculatorReducer;
