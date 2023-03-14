import { AppState } from "../rootReducer";

const selectHistory = (state: AppState) => state.history;

export default selectHistory;
