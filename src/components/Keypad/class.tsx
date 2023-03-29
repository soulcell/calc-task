import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { BUTTONS } from "../../constants/calculator";
import { AppState } from "../../store/reducers/rootReducer";
import { isButtonType } from "../../utils/buttonTypes";
import keypadHandler from "../../utils/keypadHandler";
import Button from "../Button";
import { StyledKeypad } from "./styled";

class KeypadCC extends React.Component<ConnectedProps<typeof connector>> {
  private keyboardHandler = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (!isButtonType(key)) return;

    keypadHandler(key, this.props.dispatch, this.props.calculatorState);
  };

  componentDidMount(): void {
    document.addEventListener("keypress", this.keyboardHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener("keypress", this.keyboardHandler);
  }

  render() {
    const { calculatorState, dispatch } = this.props;
    return (
      <StyledKeypad>
        {BUTTONS.map((value, idx) => (
          <Button
            key={idx}
            buttonType={value}
            onClick={() => keypadHandler(value, dispatch, calculatorState)}
          />
        ))}
      </StyledKeypad>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  calculatorState: state.calculator,
});

const connector = connect(mapStateToProps);

export default connector(KeypadCC);
