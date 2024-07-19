import { useTheme } from "@/hooks";
import { useDimensions } from "@/hooks/useDimensions";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
} from "react-native";

type Props = {
  children: any;
  type?: "add" | "quit";
  onPress?: (ev: GestureResponderEvent) => void;
};

export function TimeActionButton({ children, type, onPress }: Props) {
  const { Colors } = useTheme();
  const { height, width } = useDimensions();
  return (
    <TouchableOpacity
      onPress={(ev) => {
        if (onPress) {
          Vibration.vibrate(50);
          onPress(ev);
        }
      }}
      activeOpacity={0.6}
      style={[
        styles.button,
        {
          backgroundColor: Colors.bgButton,
          width: width * 0.1031,
          height: height * 0.1527,
          marginHorizontal: width * 0.01145,
          marginVertical: height * 0.02546,
        },
      ]}
    >
      <Text
        style={{
          ...styles.text,
          color: type === "add" ? Colors.success : Colors.error,
          fontSize: height * 0.0509,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  text: {
    fontWeight: 900,
  },
});
