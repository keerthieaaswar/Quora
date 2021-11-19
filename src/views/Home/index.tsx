import styles from "assets/styles/globalStyles";
import FloatingIcon from "components/FloatingIcon";
import Header from "components/Header";
import React from "react";
import { View } from "react-native";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FloatingIcon />
    </View>
  );
};

export default Home;
