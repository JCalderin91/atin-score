import { useDimensions } from "@/hooks/useDimensions";
import { Image, StyleSheet } from "react-native";

const logo = require("@/assets/logo-atin.png");

const WatermarkImage = () => {
  const { height } = useDimensions();
  return (
    <Image
      source={logo}
      style={[styles.logo, { height: height * 0.96, top: height * 0.02 }]}
      resizeMode="contain"
      blurRadius={2.5}
    />
  );
};

export default WatermarkImage;

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    opacity: 0.25,
  },
});
