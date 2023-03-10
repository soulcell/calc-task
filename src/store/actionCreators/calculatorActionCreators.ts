import * as actions from "../actionTypes/calculatorActionTypes";

export function setValue(value: number): actions.SetValueAction {
  return {
    type: actions.SET_VALUE,
    value,
  };
}
