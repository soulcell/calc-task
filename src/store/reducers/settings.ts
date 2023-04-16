import { createReducer } from "@reduxjs/toolkit";

import {
  DEFAULT_SHOW_HISTORY,
  DEFAULT_THEME,
} from "@/constants/defaultSettings";
import * as actions from "@/store/actionCreators/settings";
import { SettingsState } from "@/types/states";

const initialState: SettingsState = {
  currentTheme: DEFAULT_THEME,
  showHistory: DEFAULT_SHOW_HISTORY,
};

const settingsReducer = createReducer<SettingsState>(
  initialState,
  (builder) => {
    builder
      .addCase(actions.toggleHistory, (state) => {
        state.showHistory = !state.showHistory;
      })
      .addCase(actions.setTheme, (state, action) => {
        state.currentTheme = action.payload.theme;
      });
  }
);

export default settingsReducer;
