import { StyledKeypad } from "./styled";
import Button from "../Button";
import ButtonType, { isButtonType } from "../../utils/buttonTypes";
import keypadHandler from "../../utils/keypadHandler";
import { useCallback, useEffect } from "react";

export default function Keypad(): JSX.Element {
  // prettier-ignore
  const buttons: ButtonType[] = [
    "C","7","8","9","*",
    "-","4","5","6","/",
    "+","1","2","3","=",
    ".","0","CE"
  ]

  const keyboardHandler = useCallback((ev: KeyboardEvent) => {
    const key = ev.key.toUpperCase();
    if (!isButtonType(key)) return;

    keypadHandler(key);
  }, []);

  useEffect(() => {
    document.addEventListener("keypress", keyboardHandler);

    return () => {
      document.removeEventListener("keypress", keyboardHandler);
    };
  }, []);

  return (
    <StyledKeypad>
      {buttons.map((val, idx) => (
        <Button key={idx} buttonType={val} onClick={() => keypadHandler(val)} />
      ))}
    </StyledKeypad>
  );
}
