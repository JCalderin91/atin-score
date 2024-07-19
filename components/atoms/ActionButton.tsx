import { useTheme } from "@/hooks";
import { useDimensions } from "@/hooks/useDimensions";
import { useMemo } from "react";
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

export function ActionButton({ children, type, onPress }: Props) {
  const { Colors } = useTheme();
  const { height, width } = useDimensions();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        button: {
          backgroundColor: Colors.bgButton,
          width: width * 0.0575,
          height: height * 0.112,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          marginHorizontal: width * 0.0043,
          marginVertical: height * 0.01,
        },
        text: {
          fontSize: height * 0.06,
          lineHeight: height * 0.08,
          fontWeight: "800",
          color: type === "add" ? Colors.success : Colors.error,
        },
      }),
    [Colors.bgButton, Colors.error, Colors.success, height, type, width],
  );

  return (
    <TouchableOpacity
      onPress={(ev) => {
        if (onPress) {
          Vibration.vibrate(20);
          onPress(ev);
        }
      }}
      style={styles.button}
      activeOpacity={0.6}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
