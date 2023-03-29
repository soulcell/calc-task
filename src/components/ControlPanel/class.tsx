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
          name="showHistory"
          className="hideOnMobile"
          onClick={() => this.props.dispatchToggleHistory()}
        >
          {this.props.showHistory ? "Hide" : "Show"} History
        </Button>
        <Button
          name="clearHistory"
          onClick={() => this.props.dispatchClearHistory()}
        >
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
