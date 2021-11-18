import MagnifySvg from "assets/svgs/MagnifySvg";
import ProfileSvg from "assets/svgs/ProfileSvg";
import LocalizedText from "components/LocalizedText";
import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Header: React.FC = () => {
  return (
    <View style={styles.background}>
      <View style={styles.profileContainer}>
        <ProfileSvg size={1.4} />
      </View>
      <LocalizedText text="HOME" style={styles.mainText} />
      <View style={styles.iconContainer}>
        <MagnifySvg size={1.2} />
      </View>
    </View>
  )
}

export default Header;
