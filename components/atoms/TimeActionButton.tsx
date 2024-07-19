import { useTheme } from "@/hooks";
import { useDimensions } from "@/hooks/useDimensions";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
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
    <Pressable
      onPress={(ev) => {
        if (onPress) {
          Vibration.vibrate(50);
          onPress(ev);
        }
      }}
      style={[
        styles.button,
        {
          backgroundColor: Colors.bgButton,
          width: width * 0.1031,
          height: height * 0.1527,
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    margin: 10,
  },
  text: {
    fontWeight: 900,
  },
});
