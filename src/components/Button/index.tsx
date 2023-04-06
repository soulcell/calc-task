import ButtonType from "../../utils/buttonTypes";

import StyledButton from "./styled";

export default function Button({
  buttonType,
  onClick = () => {},
}: ButtonProps): JSX.Element {
  return (
    <StyledButton name={buttonType} onClick={onClick}>
      {buttonType}
    </StyledButton>
  );
}

export type ButtonProps = {
  buttonType: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
