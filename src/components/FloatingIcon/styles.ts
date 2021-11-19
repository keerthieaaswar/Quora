import { StyleSheet } from "react-native";
import color from "config/colors.json"
import { scale } from "assets/styles/globalStyles";

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: color.APP_RED,
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
    zIndex: 100,
    elevation: 5,
    bottom: scale(15),
    right: scale(15)
  },
});
