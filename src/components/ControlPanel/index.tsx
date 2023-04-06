import { useDispatch, useSelector } from "react-redux";

import { clearHistory } from "../../store/actionCreators/historyActionCreators";
import { toggleHistory } from "../../store/actionCreators/settingsActionCreators";
import selectSettings from "../../store/reducers/settings/selector";

import { Button, StyledControlPanel } from "./styled";

export default function ControlPanel(): JSX.Element {
  const { showHistory } = useSelector(selectSettings);
  const dispatch = useDispatch();
  return (
    <StyledControlPanel>
      <Button
        name="showHistory"
        hideOnMobile
        onClick={() => dispatch(toggleHistory())}
      >
        {showHistory ? "Hide" : "Show"} History
      </Button>
      <Button name="clearHistory" onClick={() => dispatch(clearHistory())}>
        Clear History
      </Button>
    </StyledControlPanel>
  );
}
