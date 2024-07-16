import { useRef, useState } from "react";

type TimeFormatted = {
  minutes: string;
  seconds: string;
};

type TimeContextIType = {
  time: number;
  isActive: boolean;
  timeFormatted: TimeFormatted;
  addTime: (time: number) => void;
  removeTime: (time: number) => void;
  reset: () => void;
  start: () => void;
  pause: () => void;
  isOver: boolean;
};

export const useTime = (): TimeContextIType => {
  const [time, setTime] = useState(90);
  const [isActive, setIsActive] = useState(false);
  const interval = useRef<any>(null);

  const timeFormatted: TimeFormatted = {
    minutes: Math.floor(time / 60)
      .toString()
      .padStart(2, "0"),
    seconds: (time % 60).toString().padStart(2, "0"),
  };
  const addTime = (seconds: number) => {
    setTime(time + seconds);
  };

  const removeTime = (seconds: number) => {
    if (time - seconds < 0) {
      setTime(0);
      return 0;
    }
    setTime(time - seconds);
  };

  const reset = () => {
    setTime(90);
    setIsActive(false);
  };

  const start = () => {
    if (time <= 0) return;
    if (interval.current != null) return;

    setIsActive(true);
    interval.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime < 1) {
          clearInterval(interval.current);
          setIsActive(false);
          interval.current = null;
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const pause = () => {
    if (interval.current !== null) {
      clearInterval(interval.current);
      interval.current = null;
      setIsActive(false);
    }
  };

  return {
    time,
    timeFormatted,
    isActive,
    addTime,
    removeTime,
    start,
    pause,
    reset,
    isOver: time === 0,
  };
};
