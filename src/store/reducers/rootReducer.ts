import { combineReducers } from "@reduxjs/toolkit";
import calculatorReducer from "./calculator/reducer";
import historyReducer from "./history/reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  history: historyReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
