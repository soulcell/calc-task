import { AppState } from "@store/reducers/rootReducer";

const selectCalculator = (state: AppState) => state.calculator;

export default selectCalculator;
