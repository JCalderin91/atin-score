import { useState } from "react";

export const usePoints = () => {
  const [pointPlayerA, setPointPlayerA] = useState(0);
  const [pointPlayerB, setPointPlayerB] = useState(0);

  const addPointToPlayerA = (p: number) => {
    setPointPlayerA(pointPlayerA + p);
  };
  const addPointToPlayerB = (p: number) => {
    setPointPlayerB(pointPlayerB + p);
  };
  const quitPointToPlayerA = (p: number) => {
    if (pointPlayerA - p < 0) {
      setPointPlayerA(0);
      return 0;
    }
    setPointPlayerA(pointPlayerA - p);
  };
  const quitPointToPlayerB = (p: number) => {
    if (pointPlayerB - p < 0) {
      setPointPlayerB(0);
      return 0;
    }
    setPointPlayerB(pointPlayerB - p);
  };
  const reset = () => {
    setPointPlayerA(0);
    setPointPlayerB(0);
  };

  return {
    pointPlayerA,
    pointPlayerB,
    addPointToPlayerA,
    addPointToPlayerB,
    quitPointToPlayerA,
    quitPointToPlayerB,
    reset,
  };
};
