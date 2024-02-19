type TurnType = {
  player: string;
  square: {
    row: number;
    col: number;
  };
};

type TurnsType = TurnType[];

type BoardType = (null | string)[][];

export type {
  BoardType,
  TurnType,
  TurnsType,
};
