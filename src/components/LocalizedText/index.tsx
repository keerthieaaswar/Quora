import React from "react";
import { Text, TextStyle } from "react-native";
import I18n from "utilities/i18n";

interface Props {
  text: string;
  style: TextStyle;
}

const LocalizedText: React.FC<Props> = props => {
  return (
    <Text style={props.style}>
      {props.text && I18n.t(props.text)}
    </Text>
  );
};

export default LocalizedText;
