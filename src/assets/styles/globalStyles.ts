import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const guidelineWidth = 360;
const guidelineBaseHeight = 640;

export const scale = (size: number) => (width / guidelineWidth) * size;
export const scaleVertical = (size: number) => (height / guidelineBaseHeight) * size;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  }
});

export default styles;
