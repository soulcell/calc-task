import { AnyAction, Middleware } from "redux";
import { isNumericToken, isOperatorToken } from "../../utils/tokenValidation";
import {
  appendOperatorToken,
  clearValue,
  executeCommand,
} from "../actionCreators/calculatorActionCreators";
import { AppState } from "../reducers/rootReducer";

export const checkTokensMiddleware: Middleware<object, AppState> =
  (api) => (next) => (action: AnyAction) => {
    if (!executeCommand.match(action) && !appendOperatorToken.match(action)) {
      return next(action);
    }

    const { tokens } = api.getState().calculator;

    if (tokens.length === 0) {
      return;
    }
    const lastToken = tokens[tokens.length - 1];

    if (isOperatorToken(lastToken)) {
      return;
    }

    if (
      lastToken &&
      isNumericToken(lastToken) &&
      !Number.isFinite(+lastToken)
    ) {
      api.dispatch(clearValue());
    }

    return next(action);
  };
