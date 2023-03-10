import { combineReducers } from "@reduxjs/toolkit";
import calculatorReducer from "./calculator/reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
