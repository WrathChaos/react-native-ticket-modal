import { Dimensions } from "react-native";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

export function footerRedeemTextStyle(footerTextColor) {
  return {
    fontSize: 20,
    paddingRight: 8,
    marginBottom: 3,
    fontWeight: "bold",
    color: footerTextColor || "white"
  };
}

export function footerRedeemStyle(footerHeight, footerBackgroundColor) {
  return {
    height: footerHeight || 60,
    width: "100%",
    backgroundColor: footerBackgroundColor || "#EDCE86",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  };
}

export function _rippleButtonStyle(backgroundColor, shadowColor) {
  return {
    width: 200,
    height: 50,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColor,
    shadowColor: shadowColor,
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.4,
    shadowRadius: 9,
    elevation: 8
  };
}

export function container(width, height, borderRadius, backgroundColor) {
  return {
    width: width,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor
  };
}

export default {
  modalContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  containerGlue: {
    flex: 1
  },
  imageStyle: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: ScreenHeight * 0.3
  },
  tearlinesStyle: {
    bottom: 12
  },
  innerContainer: { flex: 1 },
  titleStyle: {
    flexDirection: "row",
    justifyContent: "center"
  },
  primaryTitleStyle: {
    fontSize: 20,
    color: "#5f5f5f",
    fontWeight: "200"
  },
  secondaryTitleStyle: {
    color: "#EDCE86",
    fontWeight: "bold",
    fontSize: 20
  },
  descriptionStyle: {
    color: "#727272",
    margin: 16,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "400"
  },
  buttonStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  buttonTextStyle: {
    fontSize: 18,
    color: "white",
    paddingRight: 8,
    fontWeight: "600"
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  footerSmallTextStyle: {
    fontSize: 10,
    color: "#bebebc",
    fontWeight: "200"
  },
  footerTextContainer: {
    flex: 1,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  linesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  footerContentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  footerContentContainerGlue: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
};
