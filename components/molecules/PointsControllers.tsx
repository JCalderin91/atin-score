import { StyleSheet, View } from "react-native";
import { ActionButton } from "@/components/atoms/ActionButton";
import { Player } from "@/types/CombatContext";

const PointsControllers = ({ player }: { player: Player }) => {
  return (
    <View>
      <View style={styles.container}>
        <ActionButton onPress={() => player.addPoint(1)} type="add">
          +1
        </ActionButton>
        <ActionButton onPress={() => player.addPoint(2)} type="add">
          +2
        </ActionButton>
        <ActionButton onPress={() => player.addPoint(3)} type="add">
          +3
        </ActionButton>
      </View>
      <View style={styles.container}>
        <ActionButton onPress={() => player.quitPoint(1)} type="quit">
          -1
        </ActionButton>
        <ActionButton onPress={() => player.quitPoint(2)} type="quit">
          -2
        </ActionButton>
        <ActionButton onPress={() => player.quitPoint(3)} type="quit">
          -3
        </ActionButton>
      </View>
    </View>
  );
};

export default PointsControllers;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
