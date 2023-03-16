import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../store/reducers/rootReducer";
import toAccuracy from "../../utils/toAccuracy";
import { OperandCommand, StyledDisplay } from "./styled";

class DisplayCC extends React.Component<ConnectedProps<typeof connector>> {
  render() {
    const { command, input, value } = this.props.calculator;

    return (
      <StyledDisplay>
        {command && (
          <OperandCommand>
            {toAccuracy(command.operand)} {command.symbol}
          </OperandCommand>
        )}
        {input || toAccuracy(value)}
      </StyledDisplay>
    );
  }
}

const mapState = (state: AppState) => ({
  calculator: state.calculator,
});

const connector = connect(mapState);

export default connector(DisplayCC);
