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
      <StyledHistory className={showHistory ? "" : "hidden"}>
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
        {toAccuracy(command.operand)} {command.symbol} {toAccuracy(value)} ={" "}
        <RecordResult>{toAccuracy(result)}</RecordResult>
      </StyledRecord>
    );
  }
}

const mapState = (state: AppState) => ({
  historyState: state.history,
  showHistory: state.settings.showHistory,
});

const connector = connect(mapState);

const ConnectedHistoryRecord = connect(mapState)(HistoryRecord);

export default connector(HistoryCC);
