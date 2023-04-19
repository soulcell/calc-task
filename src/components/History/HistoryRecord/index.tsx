import { HistoryRecord as Record } from "@/types/historyRecord";
import toAccuracy from "@/utils/toAccuracy";

import { RecordResult, StyledRecord } from "./styled";

export default function HistoryRecord({
  record,
}: {
  record: Record;
}): JSX.Element {
  const { tokens, result } = record;
  return (
    <StyledRecord>
      {`${tokens.join(" ")} = `}
      <RecordResult>{toAccuracy(result)}</RecordResult>
    </StyledRecord>
  );
}
