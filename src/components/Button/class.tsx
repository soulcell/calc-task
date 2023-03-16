import React from "react";
import { ButtonProps } from ".";
import { StyledButton } from "./styled";

class ButtonCC extends React.Component<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> {
  render() {
    const { buttonType, onClick, className } = this.props;

    return (
      <StyledButton name={buttonType} onClick={onClick} className={className}>
        {buttonType}
      </StyledButton>
    );
  }
}

export default ButtonCC;
