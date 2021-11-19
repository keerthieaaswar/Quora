import { scale } from "assets/styles/globalStyles";
import React from "react";
import { Svg, Path } from "react-native-svg";

export default ({ size = 1 }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width={scale(size * 24)}
    height={scale(size * 24)}
    viewBox="0 0 24 24">
    <Path
      fill="#FFFFFF"
      d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </Svg>
);
