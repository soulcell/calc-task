import React from "react";
import { H2, RecordResult, StyledHistory, StyledRecord } from "./styled";
import { HistoryRecord as Record } from "../../store/reducers/history/reducer";
import { AppState } from "../../store/reducers/rootReducer";
import { connect, ConnectedProps } from "react-redux";
import toAccuracy from "../../utils/toAccuracy";
import { setValue } from "../../store/actionCreators/calculatorActionCreators";

class HistoryCC extends React.Component<ConnectedProps<typeof connector>> {
  render() {
    const { showHistory, historyState } = this.props;
    return (
      <StyledHistory className={showHistory ? "" : "hidden"} id="history">
        <H2>History</H2>
        {historyState.records.map((value, idx) => (
          <ConnectedHistoryRecord key={idx} record={value} />
        ))}
      </StyledHistory>
    );
  }
}

class HistoryRecord extends React.Component<
  { record: Record } & ConnectedProps<typeof connector>
> {
  render() {
    const { command, value, result } = this.props.record;
    const dispatch = this.props.dispatch;
    return (
      <StyledRecord onClick={() => dispatch(setValue({ value: result }))}>
        <RecordResult>{toAccuracy(result)}</RecordResult>
      </StyledRecord>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  historyState: state.history,
  showHistory: state.settings.showHistory,
});

const connector = connect(mapStateToProps);

const ConnectedHistoryRecord = connect(mapStateToProps)(HistoryRecord);

export default connector(HistoryCC);
