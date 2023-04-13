import StyledButton from "./styled";
import { ButtonProps } from "./types";

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
