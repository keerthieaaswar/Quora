import PlusSvg from "assets/svgs/PlusSvg";
import React from "react";
import { View } from "react-native";
import styles from "./styles";

const FloatingIcon: React.FC = () => {
  return (
    <View style={styles.container}>
      <PlusSvg size={1.2} />
    </View>
  );
};

export default FloatingIcon;
