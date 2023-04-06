export interface HistoryRecord {
  id: number;
  tokens: string[];
  result: number;
}

export interface HistoryState {
  records: HistoryRecord[];
}
