import { useSelector } from "react-redux";

import selectHistory from "@/store/selectors/history";
import selectSettings from "@/store/selectors/settings";

import HistoryRecord from "./HistoryRecord";
import { StyledHistory, Title } from "./styled";

export default function History(): JSX.Element {
  const { records } = useSelector(selectHistory);
  const { showHistory } = useSelector(selectSettings);

  return (
    <StyledHistory isHidden={!showHistory} data-cy="history">
      <Title>History</Title>
      {records.map((value) => (
        <HistoryRecord key={value.id} record={value} />
      ))}
    </StyledHistory>
  );
}
