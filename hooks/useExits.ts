import { useState } from "react";

export const useExits = () => {
  const [exitPlayerA, setExitPlayerA] = useState(0);
  const [exitPlayerB, setExitPlayerB] = useState(0);

  const addExitToPlayerA = (p: number) => {
    setExitPlayerA(exitPlayerA + p);
  };
  const addExitToPlayerB = (p: number) => {
    setExitPlayerB(exitPlayerB + p);
  };
  const quitExitToPlayerA = (p: number) => {
    if (exitPlayerA - p < 0) {
      setExitPlayerA(0);
      return 0;
    }
    setExitPlayerA(exitPlayerA - p);
  };
  const quitExitToPlayerB = (p: number) => {
    if (exitPlayerB - p < 0) {
      setExitPlayerB(0);
      return 0;
    }
    setExitPlayerB(exitPlayerB - p);
  };

  const resetExitsPlayerA = () => setExitPlayerA(0);
  const resetExitsPlayerB = () => setExitPlayerB(0);

  return {
    exitPlayerA,
    exitPlayerB,
    addExitToPlayerA,
    addExitToPlayerB,
    quitExitToPlayerA,
    quitExitToPlayerB,
    resetExitsPlayerA,
    resetExitsPlayerB,
  };
};
