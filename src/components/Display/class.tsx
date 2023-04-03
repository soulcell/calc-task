import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../store/reducers/rootReducer";
import toAccuracy from "../../utils/toAccuracy";
import { OperandCommand, StyledDisplay } from "./styled";

class DisplayCC extends React.Component<ConnectedProps<typeof connector>> {
  render() {
    const { command, input, value } = this.props.calculator;

    return (
      <StyledDisplay id="display">
        {command && <OperandCommand></OperandCommand>}
        {input || toAccuracy(value)}
      </StyledDisplay>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  calculator: state.calculator,
});

const connector = connect(mapStateToProps);

export default connector(DisplayCC);
