import { useTheme } from "@/hooks";
import { useDimensions } from "@/hooks/useDimensions";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children: any;
};

export function Tag({ children }: Props) {
  const { Colors } = useTheme();
  const { height, width } = useDimensions();
  return (
    <View
      style={[
        styles.button,
        {
          backgroundColor: Colors.bgBadge,
          width: width * 0.063,
          height: height * 0.1,
          marginHorizontal: width * 0.00458,
          marginVertical: height * 0.01018,
        },
      ]}
    >
      <Text style={[styles.text, { fontSize: height * 0.058 }]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {
    fontWeight: "800",
  },
});
