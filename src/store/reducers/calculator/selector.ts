import { AppState } from "../rootReducer";

const selectCalculator = (state: AppState) => state.calculator;

export default selectCalculator;
