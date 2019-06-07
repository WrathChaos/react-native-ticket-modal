import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import Modal from "react-native-modal";
// import TearLines from "react-native-tear-lines";
import TearLines from "./components/TearLines";
import FastImage from "react-native-fast-image";
import Ripple from "react-native-material-ripple";
import Icon from "react-native-dynamic-vector-icons";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

export default class TicketModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image } = this.props;
    return (
      <Modal
        backDrop
        isVisible={true}
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            borderRadius: 16,
            backgroundColor: "white",
            width: ScreenWidth * 0.75,
            height: ScreenHeight * 0.7
          }}
        >
          <View style={{ flex: 1 }}>
            <FastImage
              source={image}
              resizeMode="cover"
              style={{
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                height: ScreenHeight * 0.3
              }}
            />
            <TearLines
              color="white"
              tearSize={15}
              cuttingEdgesColor="#494b4c"
              width={ScreenWidth * 0.75}
              style={{
                bottom: 12
              }}
            />
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{ color: "#5f5f5f", fontSize: 20, fontWeight: "200" }}
                >
                  BUY 1,{"  "}
                </Text>
                <Text
                  style={{
                    color: "#EDCE86",
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  GET 1 FREE
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#727272",
                    margin: 16,
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: "400"
                  }}
                >
                  Praesent viverra lacinia pharetra. In eleifend orci vitae
                  sodales facilisis. Phasellus vulputate purus risus, vitae
                  rhoncus nisi lobortis at. Etiam gravida ex non turpis dictum
                  sollicitudin. Curabitur faucibus magna est, ut finibus sem
                  porta hendrerit.
                </Text>
              </View>
              <View
                style={{
                  marginTop: 24,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Ripple
                  style={{
                    width: 200,
                    height: 50,
                    borderRadius: 24,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#EDCE86",
                    shadowColor: "#d1950c",
                    shadowOffset: {
                      width: 0,
                      height: 8
                    },
                    shadowOpacity: 0.4,
                    shadowRadius: 9,
                    elevation: 8
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      paddingRight: 8,
                      fontWeight: "600"
                    }}
                  >
                    APPROVE
                  </Text>
                  <Icon name="check" type="Entypo" color="white" size={18} />
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
                      color: "#bebebc",
                      fontSize: 12,
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
                  <View>
                    {/* {new Array(this.tiles).fill().map((e, i) => ( */}
                    <View
                      // key={`line-${i}`}
                      style={{
                        width: 30,
                        height: 3,
                        backgroundColor: "black"
                      }}
                    />
                    {/* ))} */}
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
                          fontWeight: "600"
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

TicketModal.propTypes = {};

TicketModal.defaultProps = {
  image: require("../../assets/others/jakub-dziubak-262303-unsplash.jpg")
};
