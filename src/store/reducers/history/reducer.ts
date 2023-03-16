import { createReducer } from "@reduxjs/toolkit";
import { CalculatorCommandPlain } from "../../../commands/calculatorCommands";
import * as actions from "../../actionCreators/historyActionCreators";

export interface HistoryRecord {
  command: CalculatorCommandPlain;
  value: number;
  result: number;
}

export interface HistoryState {
  records: HistoryRecord[];
}

const initialState: HistoryState = {
  records: [],
};

const historyReducer = createReducer<HistoryState>(initialState, (builder) => {
  builder
    .addCase(actions.addHistory, (state, action) => {
      state.records.unshift(action.payload);
    })
    .addCase(actions.clearHistory, () => initialState);
});

export default historyReducer;
