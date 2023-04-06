import { createReducer } from "@reduxjs/toolkit";

import * as actions from "../../actionCreators/historyActionCreators";

import { HistoryState } from "./types";

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
