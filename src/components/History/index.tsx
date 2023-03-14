import { useSelector } from "react-redux";
import selectHistory from "../../store/reducers/history/selector";
import { H2, RecordResult, StyledHistory, StyledRecord } from "./styled";
import { HistoryRecord as Record } from "../../store/reducers/history/reducer";
import toAccuracy from "../../utils/toAccuracy";
import { useAppDispatch } from "../../store/store";
import { setValue } from "../../store/actionCreators/calculatorActionCreators";

export default function History(): JSX.Element {
  const history = useSelector(selectHistory);

  return (
    <StyledHistory>
      <H2>History</H2>
      {history.records.map((value, idx) => (
        <HistoryRecord key={idx} record={value} />
      ))}
    </StyledHistory>
  );
}

function HistoryRecord({ record }: HistoryRecordProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { command, value, result } = record;
  return (
    <StyledRecord onClick={() => dispatch(setValue({ value: result }))}>
      {toAccuracy(command.operand)} {command.symbol} {toAccuracy(value)} ={" "}
      <RecordResult>{toAccuracy(result)}</RecordResult>
    </StyledRecord>
  );
}

type HistoryRecordProps = {
  record: Record;
};
