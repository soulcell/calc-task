import { AppState } from "@store/reducers/rootReducer";

const selectHistory = (state: AppState) => state.history;

export default selectHistory;
