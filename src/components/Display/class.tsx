import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { AppState } from "@/store/reducers/rootReducer";
import toAccuracy from "@/utils/toAccuracy";

import StyledDisplay from "./styled";

class DisplayCC extends React.PureComponent<ConnectedProps<typeof connector>> {
  render() {
    const { calculator } = this.props;
    const { value, tokens, errorMessage } = calculator;

    return (
      <StyledDisplay data-cy="display">
        {errorMessage || tokens.join(" ") || toAccuracy(value)}
      </StyledDisplay>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  calculator: state.calculator,
});

const connector = connect(mapStateToProps);

export default connector(DisplayCC);
