import { createReducer } from "@reduxjs/toolkit";
import { CalculatorCommandPlain } from "../../../commands/calculatorCommands";
import * as actions from "../../actionCreators/historyActionCreators";

export interface HistoryRecord {
  id: number;
  tokens: string[];
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
    .addCase(actions.addHistory, ({ records }, { payload }) => {
      payload.id = records[0] ? records[0].id + 1 : 0;
      records.unshift(payload);
    })
    .addCase(actions.clearHistory, () => initialState);
});

export default historyReducer;
