import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { AppState } from "@/store/reducers/rootReducer";
import toAccuracy from "@/utils/toAccuracy";
import { isNumericToken } from "@/utils/tokenValidation";

import StyledDisplay, { CurrentNumber, Expression } from "./styled";

class DisplayCC extends React.PureComponent<ConnectedProps<typeof connector>> {
  render() {
    const { calculator } = this.props;
    const { value, tokens, errorMessage } = calculator;

    const lastToken = tokens.at(-1);

    const previousTokens =
      lastToken && isNumericToken(lastToken) ? tokens.slice(0, -1) : tokens;

    return (
      <StyledDisplay data-cy="display">
        {errorMessage || tokens.length ? (
          <>
            <Expression>{previousTokens.join(" ") || <>&nbsp;</>}</Expression>
            <CurrentNumber>
              {lastToken && isNumericToken(lastToken) && lastToken}
            </CurrentNumber>
          </>
        ) : (
          null || toAccuracy(value)
        )}
      </StyledDisplay>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  calculator: state.calculator,
});

const connector = connect(mapStateToProps);

export default connector(DisplayCC);
