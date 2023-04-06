import { HistoryRecord as Record } from "../../../store/reducers/history/types";
import toAccuracy from "../../../utils/toAccuracy";

import { RecordResult, StyledRecord } from "./styled";

export default function HistoryRecord({
  record,
}: HistoryRecordProps): JSX.Element {
  const { tokens, result } = record;
  return (
    <StyledRecord>
      {`${tokens.join(" ")} = `}
      <RecordResult>{toAccuracy(result)}</RecordResult>
    </StyledRecord>
  );
}

type HistoryRecordProps = {
  record: Record;
};
