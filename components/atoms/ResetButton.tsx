import { TimeActionButton } from "./TimeActionButton";

const ResetButton = ({ resetAll }: { resetAll: any }) => {
  return (
    <TimeActionButton
      onPress={() => {
        resetAll();
      }}
    >
      RESET
    </TimeActionButton>
  );
};

export default ResetButton;
