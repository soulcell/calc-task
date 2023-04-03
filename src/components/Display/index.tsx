import { useSelector } from "react-redux";
import selectCalculator from "../../store/reducers/calculator/selector";
import toAccuracy from "../../utils/toAccuracy";
import { OperandCommand, StyledDisplay } from "./styled";

export default function Display(): JSX.Element {
  const { command, value, input } = useSelector(selectCalculator);

  return (
    <StyledDisplay id="display">
      {command && <OperandCommand></OperandCommand>}
      {input || toAccuracy(value)}
    </StyledDisplay>
  );
}
