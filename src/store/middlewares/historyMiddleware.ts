import { AnyAction, Middleware } from "redux";

import { executeCommand } from "@/store/actionCreators/calculator";
import { addHistory } from "@/store/actionCreators/history";
import { AppState } from "@/store/reducers/rootReducer";

const historyMiddleware: Middleware<object, AppState> =
  (api) => (next) => (action: AnyAction) => {
    if (!executeCommand.match(action)) return next(action);

    const { tokens } = api.getState().calculator;

    next(action);

    const { errorMessage } = api.getState().calculator;

    if (errorMessage) return;

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
