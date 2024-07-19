import { useTheme } from "@/hooks";
import { useDimensions } from "@/hooks/useDimensions";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children: any;
  type: "A" | "B";
};

export function ScoreIndicator({ children, type }: Props) {
  const { Colors } = useTheme();
  const { height, width } = useDimensions();

  const bgColor = type === "A" ? Colors.primary : Colors.secondary;
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bgColor,
        height: height * 0.43,
        width: width * 0.15,
      }}
    >
      <Text style={[styles.text, { fontSize: height * 0.35 }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  text: {
    color: "white",
  },
});
