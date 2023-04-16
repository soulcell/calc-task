import { createAction } from "@reduxjs/toolkit";

import { HistoryRecord } from "@/store/reducers/history/types";

export const addHistory = createAction<HistoryRecord>("ADD_HISTORY");

export const clearHistory = createAction("CLEAR_HISTORY");
