import React from "react";

import StyledButton from "./styled";
import { ButtonProps } from ".";

class ButtonCC extends React.PureComponent<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> {
  render() {
    const { buttonType, onClick } = this.props;

    return (
      <StyledButton name={buttonType} onClick={onClick}>
        {buttonType}
      </StyledButton>
    );
  }
}

export default ButtonCC;
