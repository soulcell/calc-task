import { useSelector } from "react-redux";
import selectCalculator from "../../store/reducers/calculator/selector";
import { StyledDisplay } from "./styled";

export default function Display(): JSX.Element {
  const calculator = useSelector(selectCalculator);

  return <StyledDisplay>{calculator.operand}</StyledDisplay>;
}
