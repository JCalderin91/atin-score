import { Dimensions } from "react-native";

export const useDimensions = () => {
  const height = Math.min(
    Dimensions.get("screen").height,
    Dimensions.get("screen").width,
  );
  const width = Math.max(
    Dimensions.get("screen").height,
    Dimensions.get("screen").width,
  );

  return { height, width };
};
