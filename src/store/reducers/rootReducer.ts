import { combineReducers } from "@reduxjs/toolkit";

import calculatorReducer from "./calculator";
import historyReducer from "./history";
import settingsReducer from "./settings";

const rootReducer = combineReducers({
  settings: settingsReducer,
  calculator: calculatorReducer,
  history: historyReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
