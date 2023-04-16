import { AppState } from "@store/reducers/rootReducer";

const selectSettings = (state: AppState) => state.settings;

export default selectSettings;
