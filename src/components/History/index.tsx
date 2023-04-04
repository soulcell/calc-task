import { useSelector } from "react-redux";
import selectHistory from "../../store/reducers/history/selector";
import { H2, RecordResult, StyledHistory, StyledRecord } from "./styled";
import { HistoryRecord as Record } from "../../store/reducers/history/reducer";
import toAccuracy from "../../utils/toAccuracy";
import selectSettings from "../../store/reducers/settings/selector";

export default function History(): JSX.Element {
  const { records } = useSelector(selectHistory);
  const { showHistory } = useSelector(selectSettings);

  return (
    <StyledHistory className={showHistory ? "" : "hidden"} id="history">
      <H2>History</H2>
      {records.map((value, idx) => (
        <HistoryRecord key={idx} record={value} />
      ))}
    </StyledHistory>
  );
}

function HistoryRecord({ record }: HistoryRecordProps): JSX.Element {
  const { tokens, result } = record;
  return (
    <StyledRecord>
      {tokens.join(" ") + " = "}
      <RecordResult>{toAccuracy(result)}</RecordResult>
    </StyledRecord>
  );
}

type HistoryRecordProps = {
  record: Record;
};
