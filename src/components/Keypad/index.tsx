import { useCallback, useEffect } from "react";

import Button from "@/components/Button";
import { BUTTONS } from "@/constants/calculator";
import { useAppDispatch } from "@/store/index";
import { isButtonType } from "@/types/button";
import keypadHandler from "@/utils/keypadHandler";

import StyledKeypad from "./styled";

export default function Keypad(): JSX.Element {
  const dispatch = useAppDispatch();

  const keyboardHandler = useCallback((event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (!isButtonType(key)) return;

    keypadHandler(key, dispatch);
  }, []);

  useEffect(() => {
    document.addEventListener("keypress", keyboardHandler);

    return () => {
      document.removeEventListener("keypress", keyboardHandler);
    };
  }, []);

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
