import { useSelector } from "react-redux";

import selectCalculator from "@/store/selectors/calculator";
import toAccuracy from "@/utils/toAccuracy";
import { isNumericToken } from "@/utils/tokenValidation";

import StyledDisplay, { CurrentNumber, Expression } from "./styled";

export default function Display(): JSX.Element {
  const { value, tokens, errorMessage } = useSelector(selectCalculator);

  const lastToken = tokens.at(-1);

  const previousTokens =
    lastToken && isNumericToken(lastToken) ? tokens.slice(0, -1) : tokens;

  return (
    <StyledDisplay data-cy="display">
      {errorMessage ||
        (tokens.length ? (
          <>
            <Expression>{previousTokens.join(" ") || <>&nbsp;</>}</Expression>
            <CurrentNumber>
              {lastToken && isNumericToken(lastToken) && lastToken}
            </CurrentNumber>
          </>
        ) : (
          null || toAccuracy(value)
        ))}
    </StyledDisplay>
  );
}
