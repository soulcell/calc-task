import {
  DEFAULT_SHOW_HISTORY,
  DEFAULT_THEME,
} from "@constants/defaultSettings";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "@store/actionCreators/settings";

export interface SettingsState {
  currentTheme: string;
  showHistory: boolean;
}

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
