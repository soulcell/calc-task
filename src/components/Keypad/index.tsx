import { StyledKeypad } from "./styled";
import Button from "../Button";
import { isButtonType } from "../../utils/buttonTypes";
import keypadHandler from "../../utils/keypadHandler";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import selectCalculator from "../../store/reducers/calculator/selector";
import { BUTTONS } from "../../constants/calculator";

export default function Keypad(): JSX.Element {
  const dispatch = useAppDispatch();
  const calcState = useSelector(selectCalculator);

  const keyboardHandler = useCallback((event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    if (!isButtonType(key)) return;

    keypadHandler(key, dispatch, calcState);
  }, []);

  useEffect(() => {
    document.addEventListener("keypress", keyboardHandler);

    return () => {
      document.removeEventListener("keypress", keyboardHandler);
    };
  }, []);

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
