import React, { Component, Dimensions } from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import TearLines from "react-native-tear-lines";
import FastImage from "react-native-fast-image";

const { ScreenWidth: width, ScreenHeight: height } = Dimensions.get("window");

export default class TicketModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ borderRadius: 16, height: 350, width: ScreenWidth * 0.9 }}>
        <FastImage source={image} style={{ height: 150, borderRadius: 16 }} />
        <Text> textInComponent </Text>
      </View>
    );
  }
}
