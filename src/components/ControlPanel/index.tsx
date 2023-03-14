import { useDispatch } from "react-redux";
import { clearHistory } from "../../store/actionCreators/historyActionCreators";
import { toggleHistory } from "../../store/actionCreators/settingsActionCreators";
import { Button, StyledControlPanel } from "./styled";

export default function ControlPanel(): JSX.Element {
  const dispatch = useDispatch();
  return (
    <StyledControlPanel>
      <Button onClick={() => dispatch(toggleHistory())}>Hide History</Button>
      <Button onClick={() => dispatch(clearHistory())}>Clear History</Button>
    </StyledControlPanel>
  );
}
