import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { clearHistory } from "@actionCreators/historyActionCreators";
import { toggleHistory } from "@actionCreators/settingsActionCreators";
import { AppState } from "@store/reducers/rootReducer";

import { Button, StyledControlPanel } from "./styled";

class ControlPanelCC extends React.PureComponent<
  ConnectedProps<typeof connector>
> {
  render() {
    const { dispatchToggleHistory, dispatchClearHistory, showHistory } =
      this.props;

    const handleClearHistoryClick = () => dispatchClearHistory();

    return (
      <StyledControlPanel>
        <Button
          name="showHistory"
          hideOnMobile
          onClick={() => dispatchToggleHistory()}
        >
          {showHistory ? "Hide" : "Show"} History
        </Button>
        <Button name="clearHistory" onClick={handleClearHistoryClick}>
          Clear History
        </Button>
      </StyledControlPanel>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  showHistory: state.settings.showHistory,
});

const mapDispatchToProps = {
  dispatchToggleHistory: toggleHistory,
  dispatchClearHistory: clearHistory,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ControlPanelCC);
