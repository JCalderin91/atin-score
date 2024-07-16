export type Faults = {
  value: number;
  add: (n: number) => void;
  quit: (n: number) => void;
};

export type Exits = {
  value: number;
  add: (n: number) => void;
  quit: (n: number) => void;
};

export type Player = {
  points: number;
  addPoint: (point: number) => void;
  quitPoint: (point: number) => void;
  faults: Faults;
  exits: Exits;
};

export type TimerValue = {
  minutes: string;
  seconds: string;
};

export type Timer = {
  value: TimerValue;
  pause: () => void;
  reset: () => void;
  start: () => void;
  isRunning: boolean;
  addTime: (seg: number) => void;
  quitTime: (seg: number) => void;
  lastTen: boolean;
};

type PlayerColor = "#0800ff60" | "#ff1f1f60";
type WinnerColors = {
  playerA: PlayerColor;
  playerB: PlayerColor;
};

export type CombatContextIType = {
  playerA: Player;
  playerB: Player;
  timer: Timer;
  resetAll: () => void;
  winnerColor: null | PlayerColor;
};
