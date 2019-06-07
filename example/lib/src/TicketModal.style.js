import { Dimensions } from "react-native";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

export function primaryTitleStyle() {}

export function container(width, height, backgroundColor, borderRadius) {
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
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center"
  }
};
