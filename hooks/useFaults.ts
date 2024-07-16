import { useState } from "react";

export const useFaults = () => {
  const [faultPlayerA, setFaultPlayerA] = useState(0);
  const [faultPlayerB, setFaultPlayerB] = useState(0);

  const addFaultToPlayerA = (p: number) => {
    setFaultPlayerA(faultPlayerA + p);
  };
  const addFaultToPlayerB = (p: number) => {
    setFaultPlayerB(faultPlayerB + p);
  };
  const quitFaultToPlayerA = (p: number) => {
    if (faultPlayerA - p < 0) {
      setFaultPlayerA(0);
      return 0;
    }
    setFaultPlayerA(faultPlayerA - p);
  };
  const quitFaultToPlayerB = (p: number) => {
    if (faultPlayerB - p < 0) {
      setFaultPlayerB(0);
      return 0;
    }
    setFaultPlayerB(faultPlayerB - p);
  };
  const resetFaultsPlayerA = () => setFaultPlayerA(0);
  const resetFaultsPlayerB = () => setFaultPlayerB(0);

  return {
    faultPlayerA,
    faultPlayerB,
    addFaultToPlayerA,
    addFaultToPlayerB,
    quitFaultToPlayerA,
    quitFaultToPlayerB,
    resetFaultsPlayerA,
    resetFaultsPlayerB,
  };
};
