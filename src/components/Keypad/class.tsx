import React from "react";
import { connect, ConnectedProps } from "react-redux";

import Button from "@/components/Button";
import { BUTTONS } from "@/constants/calculator";
import { AppState } from "@/store/reducers/rootReducer";
import { isButtonType } from "@/types/button";
import keypadHandler from "@/utils/keypadHandler";

import StyledKeypad from "./styled";

class KeypadCC extends React.PureComponent<ConnectedProps<typeof connector>> {
  componentDidMount(): void {
    document.addEventListener("keypress", this.keyboardHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener("keypress", this.keyboardHandler);
  }

  private keyboardHandler = (event: KeyboardEvent) => {
    const { dispatch } = this.props;
    const key = event.key.toUpperCase();
    if (!isButtonType(key)) return;

    keypadHandler(key, dispatch);
  };

  render() {
    const { dispatch } = this.props;
    return (
      <StyledKeypad>
        {BUTTONS.map((value) => (
          <Button
            key={value}
            buttonType={value}
            onClick={() => keypadHandler(value, dispatch)}
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
