import { HistoryRecord } from "./historyRecord";

export interface CalculatorState {
  tokens: Array<string>;
  value: number;
  errorMessage?: string;
}

export interface HistoryState {
  records: HistoryRecord[];
}

export interface SettingsState {
  currentTheme: string;
  showHistory: boolean;
}
