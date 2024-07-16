import { useTheme } from "@/hooks";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children: any;
};

export function Tag({ children }: Props) {
  const { Colors } = useTheme();
  return (
    <View style={[styles.button, { backgroundColor: Colors.bgBadge }]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    margin: 4,
    borderWidth: 2,
  },
  text: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "800",
  },
});
