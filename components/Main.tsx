import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { CombatContext } from "@/context/CombatContext";

import { ScoreIndicator } from "@/components/atoms/ScoreIndicator";
import TimeSection from "@/components/molecules/TimeSection";
import FaultAndExitsActions from "@/components/molecules/FaultsAndExitsActions";
import PointsControllers from "@/components/molecules/PointsControllers";
import StartButton from "@/components/atoms/StartButton";
import ResetButton from "@/components/atoms/ResetButton";
import WatermarkImage from "@/components/atoms/WatermarkImage";
import { Tag } from "@/components/atoms/Tag";
import { useTheme } from "@/hooks";
import { useDimensions } from "@/hooks/useDimensions";
import { StatusBar } from "expo-status-bar";

const Main = () => {
  const { timer, playerA, playerB, resetAll, winnerColor } =
    useContext(CombatContext);
  const { Colors } = useTheme();
  const { height, width } = useDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: winnerColor || Colors.defaultBgColor,
          height,
          paddingHorizontal: width * 0.009,
          paddingVertical: height * 0.02,
        },
      ]}
    >
      <StatusBar style="light" hidden />
      <WatermarkImage />
      <View style={styles.topSection}>
        <FaultAndExitsActions player={playerA} />
        <ScoreIndicator type="A">{playerA?.points}</ScoreIndicator>
        <View style={styles.timeContainer}>
          <TimeSection timer={timer} />
          <View style={styles.centerContainer}>
            <View>
              <Tag>{playerA?.faults?.value} A</Tag>
              <Tag>{playerA?.exits?.value} S</Tag>
            </View>
            <ResetButton resetAll={resetAll} />
            <View>
              <Tag>{playerB?.faults?.value} A</Tag>
              <Tag>{playerB?.exits?.value} S</Tag>
            </View>
          </View>
        </View>
        <ScoreIndicator type="B">{playerB?.points}</ScoreIndicator>
        <FaultAndExitsActions player={playerB} />
      </View>
      <View
        style={[styles.bottomContainer, { paddingVertical: height * 0.02 }]}
      >
        <PointsControllers player={playerA} />
        <View style={{ justifyContent: "center" }}>
          <StartButton timer={timer} />
          <Text style={{ fontWeight: 800, marginTop: 10 }}>Hecho por ATIN</Text>
        </View>
        <PointsControllers player={playerB} />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  timeContainer: {
    alignItems: "center",
  },
  centerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
