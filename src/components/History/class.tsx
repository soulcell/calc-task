import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "@store/reducers/rootReducer";

import HistoryRecord from "./HistoryRecord";
import { H2, StyledHistory } from "./styled";

class HistoryCC extends React.PureComponent<ConnectedProps<typeof connector>> {
  render() {
    const { showHistory, historyState } = this.props;
    return (
      <StyledHistory isHidden={!showHistory} data-cy="history">
        <H2>History</H2>
        {historyState.records.map((value) => (
          <HistoryRecord key={value.id} record={value} />
        ))}
      </StyledHistory>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  historyState: state.history,
  showHistory: state.settings.showHistory,
});

const connector = connect(mapStateToProps);

export default connector(HistoryCC);
