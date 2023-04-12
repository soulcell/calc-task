import { useSelector } from "react-redux";
import selectCalculator from "@store/reducers/calculator/selector";
import toAccuracy from "@utils/toAccuracy";

import { StyledDisplay } from "./styled";

export default function Display(): JSX.Element {
  const { value, tokens, errorMessage } = useSelector(selectCalculator);

  return (
    <StyledDisplay data-cy="display">
      {errorMessage || tokens.join(" ") || toAccuracy(value)}
    </StyledDisplay>
  );
}
