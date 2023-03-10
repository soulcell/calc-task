export const SET_VALUE = "SET_VALUE";
export interface SetValueAction {
  type: typeof SET_VALUE;
  value: number;
}

export type CalculatorAction = SetValueAction;
