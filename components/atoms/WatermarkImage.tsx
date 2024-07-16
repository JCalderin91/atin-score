import { Dimensions, Image, StyleSheet } from "react-native";

const logo = require("@/assets/logo-atin.png");

const WatermarkImage = () => {
  return (
    <Image
      source={logo}
      style={styles.logo}
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
    height: Dimensions.get("screen").height * 0.9,
    top: Dimensions.get("screen").height * 0.05,
    opacity: 0.25,
  },
});
