import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Dimensions } from "react-native";
import Modal from "react-native-modal";
import TearLines from "./components/TearLines";
import FastImage from "react-native-fast-image";
import Ripple from "react-native-material-ripple";
import Icon from "react-native-dynamic-vector-icons";
import styles, { container, _rippleButtonStyle } from "./TicketModal.style";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

const LINES_NUMBER = 25;

export default class TicketModal extends Component {
  renderLines() {
    var arr = [];
    for (let i = 0; i < LINES_NUMBER; i++) {
      arr.push(
        <View
          key={`line-${i}`}
          style={{
            width: 5,
            height: 1.5,
            paddingRight: 8,
            backgroundColor: "#595959"
          }}
        />
      );
    }
    return arr;
  }

  render() {
    const {
      image,
      width,
      height,
      borderRadius,
      backgroundColor,
      resizeMode,
      imageStyle,
      tearlinesColor,
      tearSize,
      cuttingEdgesColor,
      tearlinesWidth,
      tearlinesStyle,
      primaryTitleStyle,
      primaryTitle,
      secondaryTitleStyle,
      secondaryTitle,
      description,
      descriptionStyle,
      buttonStyle,
      buttonColor,
      buttonShadowColor,
      buttonTextStyle,
      buttonText,
      buttonIconName,
      buttonIconType,
      buttonIconColor,
      buttonIconSize,
      buttonIconComponent
    } = this.props;
    return (
      <Modal backDrop isVisible={true} style={styles.modalContainer}>
        <View style={container(width, height, borderRadius, backgroundColor)}>
          <View style={styles.containerGlue}>
            <FastImage
              source={image}
              resizeMode={resizeMode}
              style={imageStyle || styles.imageStyle}
            />
            <TearLines
              color={tearlinesColor}
              tearSize={tearSize}
              cuttingEdgesColor={cuttingEdgesColor}
              width={tearlinesWidth}
              style={tearlinesStyle || styles.tearlinesStyle}
            />
            <View style={styles.innerContainer}>
              <View style={styles.titleStyle}>
                <Text style={primaryTitleStyle || styles.primaryTitleStyle}>
                  {primaryTitle}
                </Text>
                <Text style={secondaryTitleStyle || styles.secondaryTitleStyle}>
                  {secondaryTitle}
                </Text>
              </View>
              <View>
                <Text style={descriptionStyle || styles.descriptionStyle}>
                  {description}
                </Text>
              </View>
              <View style={styles.buttonStyle}>
                <Ripple
                  rippleColor="gray"
                  rippleContainerBorderRadius={24}
                  style={
                    buttonStyle ||
                    _rippleButtonStyle(buttonColor, buttonShadowColor)
                  }
                >
                  <Text style={buttonTextStyle || styles.buttonTextStyle}>
                    {buttonText}
                  </Text>
                  {buttonIconComponent || (
                    <Icon
                      name={buttonIconName || "check"}
                      type={buttonIconType || "Entypo"}
                      color={buttonIconColor || "white"}
                      size={buttonIconSize || 18}
                    />
                  )}
                </Ripple>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    marginBottom: 12,
                    alignItems: "center",
                    justifyContent: "flex-end"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#bebebc",
                      fontWeight: "200"
                    }}
                  >
                    Valid until 10/12/2019 20:34
                  </Text>
                </View>
                <View
                  style={{
                    height: 60,
                    width: "100%",
                    backgroundColor: "#EDCE86",
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly"
                    }}
                  >
                    {this.renderLines()}
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: "white",
                          paddingRight: 8,
                          marginBottom: 3,
                          fontWeight: "bold"
                        }}
                      >
                        A7103B03FD
                      </Text>
                      <Icon
                        size={20}
                        type="Entypo"
                        color="white"
                        name="scissors"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

TicketModal.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  resizeMode: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  tearlinesColor: PropTypes.string,
  tearSize: PropTypes.number,
  cuttingEdgesColor: PropTypes.string,
  tearlinesWidth: PropTypes.number,
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
  description: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonShadowColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonIconName: PropTypes.string,
  buttonIconType: PropTypes.string,
  buttonIconColor: PropTypes.string,
  buttonIconSize: PropTypes.number
};

TicketModal.defaultProps = {
  image: require("../../assets/others/jakub-dziubak-262303-unsplash.jpg"),
  width: ScreenWidth * 0.75,
  height: ScreenHeight * 0.7,
  borderRadius: 16,
  backgroundColor: "white",
  resizeMode: "cover",
  tearlinesColor: "white",
  tearSize: 15,
  cuttingEdgesColor: "#494b4c",
  tearlinesWidth: ScreenWidth * 0.75,
  primaryTitle: "BUY 1,  ",
  secondaryTitle: "GET 1 FREE",
  buttonColor: "#EDCE86",
  buttonShadowColor: "#d1950c",
  buttonText: "APPROVE",
  buttonIconName: "check",
  buttonIconType: "Entypo",
  buttonIconColor: "white",
  buttonIconSize: 18,
  description:
    "Praesent viverra lacinia pharetra. In eleifend orci vitae sodales facilisis. Phasellus vulputate purus risus, vitae rhoncus nisi lobortis at. Etiam gravida ex non turpis dictum sollicitudin. Curabitur faucibus magna est, ut finibus sem porta hendrerit."
};
