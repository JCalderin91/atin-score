import { View, Text, StyleSheet } from "react-native";
import { ActionButton } from "@/components/atoms/ActionButton";
import { Timer } from "@/types/CombatContext";
import { useTheme } from "@/hooks";

const TimeSection = ({ timer }: { timer: Timer }) => {
  const { Colors } = useTheme();
  return (
    <View style={styles.container}>
      <ActionButton onPress={() => timer.quitTime(10)} type="quit">
        10s
      </ActionButton>
      <Text
        style={{
          fontSize: 60,
          color: timer?.lastTen ? Colors.error : "black",
          fontWeight: 800,
          width: 155,
        }}
      >
        {timer.value.minutes}:{timer.value.seconds}
      </Text>
      <ActionButton type="add" onPress={() => timer.addTime(10)}>
        10s
      </ActionButton>
    </View>
  );
};

export default TimeSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
