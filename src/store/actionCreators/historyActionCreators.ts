import { createAction } from "@reduxjs/toolkit";
import { HistoryRecord } from "../reducers/history/reducer";

export const addHistory = createAction<HistoryRecord>("ADD_HISTORY");

export const clearHistory = createAction("CLEAR_HISTORY");
