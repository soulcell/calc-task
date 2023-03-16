import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { clearHistory } from "../../store/actionCreators/historyActionCreators";
import { toggleHistory } from "../../store/actionCreators/settingsActionCreators";
import { AppState } from "../../store/reducers/rootReducer";
import { Button, StyledControlPanel } from "./styled";

class ControlPanelCC extends React.Component<ConnectedProps<typeof connector>> {
  render() {
    return (
      <StyledControlPanel>
        <Button
          className="hideOnMobile"
          onClick={() => this.props.dispatchToggleHistory()}
        >
          {this.props.showHistory ? "Hide" : "Show"} History
        </Button>
        <Button onClick={() => this.props.dispatchClearHistory()}>
          Clear History
        </Button>
      </StyledControlPanel>
    );
  }
}

const mapState = (state: AppState) => ({
  showHistory: state.settings.showHistory,
});

const mapDispatch = {
  dispatchToggleHistory: toggleHistory,
  dispatchClearHistory: clearHistory,
};

const connector = connect(mapState, mapDispatch);

export default connector(ControlPanelCC);
