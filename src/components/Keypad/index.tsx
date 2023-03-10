import { StyledKeypad } from "./styled";
import Button from "../Button";
import ButtonType from "../../utils/buttonTypes";
import keypadHandler from "../../utils/keypadHandler";

export default function Keypad(): JSX.Element {
  // prettier-ignore
  const buttons: ButtonType[] = [
    "C","7","8","9","*",
    "-","4","5","6","/",
    "+","1","2","3","=",
    ".","0","CE"
  ]

  return (
    <StyledKeypad>
      {buttons.map((val, idx) => (
        <Button key={idx} buttonType={val} onClick={() => keypadHandler(val)} />
      ))}
    </StyledKeypad>
  );
}
