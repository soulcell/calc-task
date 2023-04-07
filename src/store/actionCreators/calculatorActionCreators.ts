import { createAction } from "@reduxjs/toolkit";
import { ButtonDigit } from "@utils/buttonTypes";

export const appendDigit = createAction<{ digit: ButtonDigit }>("APPEND_DIGIT");

export const clearAll = createAction("CLEAR_ALL");

export const clearValue = createAction("CLEAR_VALUE");

export const executeCommand = createAction("EXECUTE_COMMAND");

export const changeSign = createAction("CHANGE_SIGN");

export const appendNumericToken = createAction<{ token: string }>(
  "APPEND_NUMERIC_TOKEN"
);

export const appendOperatorToken = createAction<{ token: string }>(
  "APPEND_OPERATOR_TOKEN"
);
