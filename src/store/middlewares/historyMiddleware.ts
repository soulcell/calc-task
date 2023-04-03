import { AnyAction, Middleware } from "redux";
import { CalculatorCommand } from "../../commands/calculatorCommands";
import { executeCommand } from "../actionCreators/calculatorActionCreators";
import { addHistory } from "../actionCreators/historyActionCreators";
import { AppState } from "../reducers/rootReducer";

export const historyMiddleware: Middleware<object, AppState> =
  (api) => (next) => (action: AnyAction) => {
    const { command, value, tokens } = api.getState().calculator;

    if (!executeCommand.match(action) || !command) return next(action);

    // api.dispatch(
    //   addHistory({
    //     command,
    //     value,
    //     result: CalculatorCommand.fromObject(command).execute(value),
    //   })
    // );
    return next(action);
  };
