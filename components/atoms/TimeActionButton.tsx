import { useTheme } from "@/hooks";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

type Props = {
  children: any;
  type?: "add" | "quit";
  onPress?: (ev: GestureResponderEvent) => void;
};

export function TimeActionButton({ children, type, onPress }: Props) {
  const { Colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: Colors.bgButton }]}
    >
      <Text
        style={{
          ...styles.text,
          color: type === "add" ? Colors.success : Colors.error,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 900,
  },
});
