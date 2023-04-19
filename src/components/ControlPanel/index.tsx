import { useDispatch, useSelector } from "react-redux";

import { clearHistory } from "@/store/actionCreators/history";
import { toggleHistory } from "@/store/actionCreators/settings";
import selectSettings from "@/store/selectors/settings";

import { Button, StyledControlPanel } from "./styled";

export default function ControlPanel(): JSX.Element {
  const { showHistory } = useSelector(selectSettings);
  const dispatch = useDispatch();

  const handleToggleHistoryClick = () => dispatch(toggleHistory());
  const handleClearHistoryClick = () => dispatch(clearHistory());

  return (
    <StyledControlPanel>
      <Button
        name="showHistory"
        hideOnMobile
        onClick={handleToggleHistoryClick}
      >
        {showHistory ? "Hide" : "Show"} History
      </Button>
      <Button name="clearHistory" onClick={handleClearHistoryClick}>
        Clear History
      </Button>
    </StyledControlPanel>
  );
}
