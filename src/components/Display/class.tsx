import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../store/reducers/rootReducer";
import toAccuracy from "../../utils/toAccuracy";
import { StyledDisplay } from "./styled";

class DisplayCC extends React.Component<ConnectedProps<typeof connector>> {
  render() {
    const { tokens, value } = this.props.calculator;

    return (
      <StyledDisplay id="display">
        {tokens.join(" ") || toAccuracy(value)}
      </StyledDisplay>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  calculator: state.calculator,
});

const connector = connect(mapStateToProps);

export default connector(DisplayCC);
