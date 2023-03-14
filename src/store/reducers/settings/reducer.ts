import { createReducer } from "@reduxjs/toolkit";
import * as actions from "../../actionCreators/settingsActionCreators";

export interface SettingsState {
  showHistory: boolean;
}

const initialState: SettingsState = {
  showHistory: true,
};

const settingsReducer = createReducer<SettingsState>(
  initialState,
  (builder) => {
    builder.addCase(actions.toggleHistory, (state) => {
      state.showHistory = !state.showHistory;
    });
  }
);

export default settingsReducer;
