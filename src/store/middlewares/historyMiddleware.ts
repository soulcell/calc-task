import { executeCommand } from "@actionCreators/calculatorActionCreators";
import { addHistory } from "@actionCreators/historyActionCreators";
import { AppState } from "@store/reducers/rootReducer";
import { AnyAction, Middleware } from "redux";

const historyMiddleware: Middleware<object, AppState> =
  (api) => (next) => (action: AnyAction) => {
    if (!executeCommand.match(action)) return next(action);

    const { tokens } = api.getState().calculator;

    next(action);

    const { value } = api.getState().calculator;

    api.dispatch(
      addHistory({
        id: 0,
        tokens,
        result: value,
      })
    );
  };

export default historyMiddleware;
