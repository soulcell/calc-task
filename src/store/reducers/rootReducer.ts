import { combineReducers } from "@reduxjs/toolkit";

import calculatorReducer from "./calculator/reducer";
import historyReducer from "./history/reducer";
import settingsReducer from "./settings/reducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  calculator: calculatorReducer,
  history: historyReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
