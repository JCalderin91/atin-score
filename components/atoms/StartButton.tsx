import { Timer } from "@/types/CombatContext";
import { TimeActionButton } from "@/components/atoms/TimeActionButton";

const StartButton = ({ timer }: { timer: Timer }) => {
  return (
    <TimeActionButton
      type={timer.isRunning ? "quit" : "add"}
      onPress={() => {
        if (timer.isRunning) {
          timer.pause();
        } else {
          timer.start();
        }
      }}
    >
      {timer.isRunning ? "PAUSE" : "START"}
    </TimeActionButton>
  );
};

export default StartButton;
