import {
  appendNumericToken,
  appendOperatorToken,
  appendParenthesisToken,
  clearValue,
} from "@actionCreators/calculatorActionCreators";
import { MAX_TOKENS } from "@constants/calculator";
import { AppState } from "@store/reducers/rootReducer";
import {
  isLeftParenthesisToken,
  isNumericToken,
  isOperatorToken,
  isRightParenthesisToken,
} from "@utils/tokenValidation";
import { AnyAction, Middleware } from "redux";

const checkTokensMiddleware: Middleware<object, AppState> =
  (api) => (next) => (action: AnyAction) => {
    const { tokens } = api.getState().calculator;
    const lastToken = tokens.at(-1);

    if (appendNumericToken.match(action)) {
      if (tokens.length >= MAX_TOKENS) return;
      if (action.payload.token === "." && lastToken === ".") return;
    } else if (appendOperatorToken.match(action)) {
      if (!lastToken) return;
      if (tokens.length >= MAX_TOKENS) return;

      if (isNumericToken(lastToken) && !Number.isFinite(+lastToken)) return;

      if (isOperatorToken(lastToken)) api.dispatch(clearValue());

      if (lastToken === "(") return;
    } else if (appendParenthesisToken.match(action)) {
      if (
        lastToken &&
        isNumericToken(lastToken) &&
        !Number.isFinite(+lastToken)
      )
        return;
      if (tokens.length >= MAX_TOKENS) return;

      if (isRightParenthesisToken(action.payload.token)) {
        if (!lastToken) return;

        if (isOperatorToken(lastToken)) return;

        if (isLeftParenthesisToken(lastToken)) return;

        const leftParenthesesCount = tokens.filter((token) =>
          isLeftParenthesisToken(token)
        ).length;
        const rightParenthesesCount = tokens.filter((token) =>
          isRightParenthesisToken(token)
        ).length;
        if (leftParenthesesCount <= rightParenthesesCount) return;
      }
    }

    return next(action);

    // if (
    //   !executeCommand.match(action) &&
    //   !appendOperatorToken.match(action)
    //   ) {
    //   return next(action);
    // }

    // const { tokens } = api.getState().calculator;

    // if (tokens.length === 0) {
    //   return;
    // }
    // const lastToken = tokens[tokens.length - 1];

    // if (isOperatorToken(lastToken)) {
    //   return;
    // }

    // if (
    //   lastToken &&
    //   isNumericToken(lastToken) &&
    //   !Number.isFinite(+lastToken)
    // ) {
    //   api.dispatch(clearValue());
    // }

    // return next(action);
  };

export default checkTokensMiddleware;
