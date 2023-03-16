import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { BUTTONS } from "../../constants/calculator";
import { AppState } from "../../store/reducers/rootReducer";
import { isButtonType } from "../../utils/buttonTypes";
import keypadHandler from "../../utils/keypadHandler";
import Button from "../Button";
import { StyledKeypad } from "./styled";

class KeypadCC extends React.Component<ConnectedProps<typeof connector>> {
  private keyboardHandler = (ev: KeyboardEvent) => {
    const key = ev.key.toUpperCase();
    if (!isButtonType(key)) return;

    keypadHandler(key, this.props.dispatch, this.props.calcState);
  };

  componentDidMount(): void {
    document.addEventListener("keypress", this.keyboardHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener("keypress", this.keyboardHandler);
  }

  render() {
    const { calcState, dispatch } = this.props;
    return (
      <StyledKeypad>
        {BUTTONS.map((val, idx) => (
          <Button
            key={idx}
            buttonType={val}
            onClick={() => keypadHandler(val, dispatch, calcState)}
          />
        ))}
      </StyledKeypad>
    );
  }
}

const mapState = (state: AppState) => ({
  calcState: state.calculator,
});

const connector = connect(mapState);

export default connector(KeypadCC);
