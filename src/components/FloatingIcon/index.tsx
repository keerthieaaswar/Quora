import PlusSvg from "assets/svgs/PlusSvg";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const FloatingIcon: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <PlusSvg size={1.2} />
    </TouchableOpacity>

  );
};

export default FloatingIcon;
