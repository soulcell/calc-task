import { createAction } from "@reduxjs/toolkit";

export const setTheme = createAction<{ theme: string }>("SET_THEME");

export const toggleHistory = createAction("TOGGLE_HISTORY");
