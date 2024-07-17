import { useTheme } from "@/hooks";
import { useMemo } from "react";
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

export function ActionButton({ children, type, onPress }: Props) {
  const { Colors } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        button: {
          backgroundColor: Colors.bgButton,
          width: 50,
          height: 44,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          margin: 4,
        },
        text: {
          fontSize: 24,
          lineHeight: 32,
          fontWeight: "800",
          color: type === "add" ? Colors.success : Colors.error,
        },
      }),
    [Colors, type],
  );

  return (
    <Pressable
      onPress={(ev) => {
        if (onPress) {
          Vibration.vibrate(20);
          onPress(ev);
        }
      }}
      style={styles.button}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
