import React from "react";

import { HistoryRecord as Record } from "@/store/reducers/history/types";
import toAccuracy from "@/utils/toAccuracy";

import { RecordResult, StyledRecord } from "./styled";

class HistoryRecord extends React.PureComponent<{ record: Record }> {
  render() {
    const { record } = this.props;
    const { tokens, result } = record;
    return (
      <StyledRecord>
        {tokens.join(" ")}
        <RecordResult>{toAccuracy(result)}</RecordResult>
      </StyledRecord>
    );
  }
}

export default HistoryRecord;
