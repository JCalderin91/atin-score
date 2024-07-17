import { useTheme } from "@/hooks";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children: any;
  type: "A" | "B";
};

export function ScoreIndicator({ children, type }: Props) {
  const { Colors } = useTheme();

  const bgColor = type === "A" ? Colors.primary : Colors.secondary;
  return (
    <View style={{ ...styles.container, backgroundColor: bgColor }}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 185,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  text: {
    fontSize: 140,
    color: "white",
  },
});
