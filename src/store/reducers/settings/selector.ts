import { AppState } from "../rootReducer";

const selectSettings = (state: AppState) => state.settings;

export default selectSettings;
