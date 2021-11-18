import { StyleSheet } from "react-native";
import { scale } from "assets/styles/globalStyles";
import fonts from "config/fonts";
import colors from "config/colors.json";

export default StyleSheet.create({
  mainText: {
    fontFamily: fonts.font_bold.fontFamily,
    fontSize: scale(fonts.h2.fontSize),
    color: 'black',
    paddingHorizontal: scale(10),
  },
  background: {
    backgroundColor: colors.HEADER_BACKGROUND,
    paddingVertical: scale(5),
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: scale(10),
  },
  profileContainer: {
    width: scale(30),
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(30),
    overflow: 'hidden',
  },
  iconContainer: {
    position: 'absolute',
    right: scale(10),
    paddingVertical: scale(5),
  },
})