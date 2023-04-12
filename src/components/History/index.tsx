import { useSelector } from "react-redux";
import selectHistory from "@store/reducers/history/selector";
import selectSettings from "@store/reducers/settings/selector";

import HistoryRecord from "./HistoryRecord";
import { H2, StyledHistory } from "./styled";

export default function History(): JSX.Element {
  const { records } = useSelector(selectHistory);
  const { showHistory } = useSelector(selectSettings);

  return (
    <StyledHistory isHidden={!showHistory} data-cy="history">
      <H2>History</H2>
      {records.map((value) => (
        <HistoryRecord key={value.id} record={value} />
      ))}
    </StyledHistory>
  );
}
