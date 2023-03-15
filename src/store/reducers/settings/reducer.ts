import { createReducer } from "@reduxjs/toolkit";
import {
  DEFAULT_SHOW_HISTORY,
  DEFAULT_THEME,
} from "../../../constants/defaultSettings";
import * as actions from "../../actionCreators/settingsActionCreators";

export interface SettingsState {
  theme: string;
  showHistory: boolean;
}

const initialState: SettingsState = {
  theme: DEFAULT_THEME,
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
        state.theme = action.payload.theme;
      });
  }
);

export default settingsReducer;
