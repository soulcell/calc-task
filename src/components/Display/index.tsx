import { useSelector } from "react-redux";
import selectCalculator from "../../store/reducers/calculator/selector";
import { OperandCommand, StyledDisplay } from "./styled";

export default function Display(): JSX.Element {
  const calculator = useSelector(selectCalculator);

  return (
    <StyledDisplay>
      <OperandCommand>
        {calculator.command?.operand} {calculator.command?.symbol}
      </OperandCommand>
      {calculator.value}
    </StyledDisplay>
  );
}
