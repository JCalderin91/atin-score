import { View } from "react-native";
import { ActionButton } from "@/components/atoms/ActionButton";
import { Player } from "@/types/CombatContext";

const FaultAndExitsActions = ({ player }: { player: Player }) => {
  return (
    <View>
      <ActionButton onPress={() => player.faults.add(1)} type="add">
        +A
      </ActionButton>
      <ActionButton onPress={() => player.faults.quit(1)} type="quit">
        -A
      </ActionButton>
      <ActionButton onPress={() => player.exits.add(1)} type="add">
        +S
      </ActionButton>
      <ActionButton onPress={() => player.exits.quit(1)} type="quit">
        -S
      </ActionButton>
    </View>
  );
};

export default FaultAndExitsActions;
