import { AnyAction, Middleware } from "redux";
import {
  executeCommand,
  setCommand,
} from "../actionCreators/calculatorActionCreators";

export const intermediateValueMiddleware: Middleware =
  (api) => (next) => (action: AnyAction) => {
    if (!setCommand.match(action) || !api.getState().calculator.command)
      return next(action);

    api.dispatch(executeCommand());

    action.payload.command.operand = api.getState().calculator.value;
    return next(action);
  };
