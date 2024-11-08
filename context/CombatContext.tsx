import { createContext, useEffect, useMemo, useState } from "react";
import { useExits, useFaults, usePoints, useTime } from "@/hooks";
import {
  CombatContextIType,
  Player,
  PlayerColor,
  Timer,
  WinnerColors,
} from "@/types/CombatContext";
import { Audio } from "expo-av";
import { Vibration } from "react-native";
import { LocalConstants } from "@/constants";

const WINNER_COLORS: WinnerColors = {
  playerA: "#0800ff60",
  playerB: "#ff1f1f60",
};

export const CombatContext = createContext<CombatContextIType>(
  {} as CombatContextIType,
);

export function CombatProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const {
    timeFormatted,
    addTime,
    removeTime,
    pause,
    start,
    reset: resetTimer,
    isActive,
    isOver,
    time,
  } = useTime();

  const {
    addPointToPlayerA,
    addPointToPlayerB,
    pointPlayerA,
    pointPlayerB,
    quitPointToPlayerA,
    quitPointToPlayerB,
    reset: resetPoints,
  } = usePoints();

  const {
    faultPlayerA,
    faultPlayerB,
    addFaultToPlayerA,
    addFaultToPlayerB,
    quitFaultToPlayerA,
    quitFaultToPlayerB,
    resetFaultsPlayerA,
    resetFaultsPlayerB,
  } = useFaults();

  const {
    exitPlayerA,
    exitPlayerB,
    addExitToPlayerA,
    addExitToPlayerB,
    quitExitToPlayerA,
    quitExitToPlayerB,
    resetExitsPlayerA,
    resetExitsPlayerB,
  } = useExits();

  const playerA: Player = useMemo(
    () => ({
      points: pointPlayerA + Math.trunc(exitPlayerB / LocalConstants.MAX_EXITS),
      addPoint: addPointToPlayerA,
      quitPoint: quitPointToPlayerA,
      faults: {
        value: faultPlayerA,
        add: addFaultToPlayerA,
        quit: quitFaultToPlayerA,
      },
      exits: {
        value: exitPlayerA,
        add: addExitToPlayerA,
        quit: quitExitToPlayerA,
      },
    }),
    [
      pointPlayerA,
      exitPlayerB,
      addPointToPlayerA,
      quitPointToPlayerA,
      faultPlayerA,
      addFaultToPlayerA,
      quitFaultToPlayerA,
      exitPlayerA,
      addExitToPlayerA,
      quitExitToPlayerA,
    ],
  );

  const playerB: Player = useMemo(
    () => ({
      points: pointPlayerB + Math.trunc(exitPlayerA / LocalConstants.MAX_EXITS),
      addPoint: addPointToPlayerB,
      quitPoint: quitPointToPlayerB,
      faults: {
        value: faultPlayerB,
        add: addFaultToPlayerB,
        quit: quitFaultToPlayerB,
      },
      exits: {
        value: exitPlayerB,
        add: addExitToPlayerB,
        quit: quitExitToPlayerB,
      },
    }),
    [
      addExitToPlayerB,
      addFaultToPlayerB,
      addPointToPlayerB,
      exitPlayerA,
      exitPlayerB,
      faultPlayerB,
      pointPlayerB,
      quitExitToPlayerB,
      quitFaultToPlayerB,
      quitPointToPlayerB,
    ],
  );

  const timer: Timer = useMemo(
    () => ({
      value: timeFormatted,
      pause,
      start,
      reset: resetTimer,
      isRunning: isActive,
      addTime,
      quitTime: removeTime,
      lastTen: time < 10,
    }),
    [
      addTime,
      isActive,
      pause,
      removeTime,
      resetTimer,
      start,
      time,
      timeFormatted,
    ],
  );

  const resetAll = () => {
    resetTimer();
    resetPoints();
    pause();
    resetExitsPlayerA();
    resetExitsPlayerB();
    resetFaultsPlayerA();
    resetFaultsPlayerB();
    setWinnerColor(null);
  };

  const [winnerColor, setWinnerColor] = useState<null | PlayerColor>(null);

  // Watchers ===========================

  useEffect(() => {
    if (playerA.exits.value >= LocalConstants.MAX_EXITS) {
      resetExitsPlayerA();
      playerB.addPoint(1);
    }
  }, [playerA, playerB, resetExitsPlayerA]);

  useEffect(() => {
    if (playerB.exits.value >= LocalConstants.MAX_EXITS) {
      resetExitsPlayerB();
      playerA.addPoint(1);
    }
  }, [playerB, playerA, resetExitsPlayerB]);

  useEffect(() => {
    if (winnerColor !== null) {
      timer.pause();
    }
  }, [winnerColor, timer]);

  useEffect(() => {
    if (isOver) {
      if (
        playerA.points - playerA.faults.value >
        playerB.points - playerB.faults.value
      ) {
        setWinnerColor(WINNER_COLORS.playerA);
      } else if (
        playerB.points - playerB.faults.value >
        playerA.points - playerA.faults.value
      ) {
        setWinnerColor(WINNER_COLORS.playerB);
      } else {
        setWinnerColor(null);
      }
    } else if (playerA.points >= LocalConstants.POINTS_TO_WIN) {
      setWinnerColor(WINNER_COLORS.playerA);
    } else if (playerB.points >= LocalConstants.POINTS_TO_WIN) {
      setWinnerColor(WINNER_COLORS.playerB);
    } else {
      setWinnerColor(null);
    }
  }, [playerB, playerA, timer, isOver]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audio.mp3"),
    );
    Vibration.vibrate();
    await sound.playAsync();
  };

  useEffect(() => {
    if (winnerColor) {
      playSound();
    }
  }, [winnerColor]);

  useEffect(() => {
    if (time === 0) {
      playSound();
    }
  }, [time]);

  return (
    <CombatContext.Provider
      value={{
        playerA,
        playerB,
        timer,
        resetAll,
        winnerColor,
      }}
    >
      {children}
    </CombatContext.Provider>
  );
}
