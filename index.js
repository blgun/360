import React from "react";
import {
  AppRegistry,
  asset,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton,
} from "react-360";
import axios from "./Axios";
// import house from "./data/houseData";

export class Buttons extends React.Component {
  componentDidMount() {
    axios.get("/allPlaces/getJson").then((result) => {
      console.log(result.data);
      this.setState({
        allData: { ...result.data },
        room: result.data.Улаанбаатар.name,
        adjacentRooms: [...result.data.Улаанбаатар.data.data],
      });
    });
  }
  state = {
    allData: {},
    room: "",
    adjacentRooms: [],
  };
  clickHandler(roomSelection) {
    console.log("???", this.state.allData);
    this.setState({
      room: this.state.allData[`${roomSelection}`].name,
      adjacentRooms: this.state.allData[`${roomSelection}`].data.data,
    });
    Environment.setBackgroundImage(
      asset(`${this.state.allData[`${roomSelection}`].data.img}`)
    );
  }
  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];
    rooms.map((room) => {
      buttons.push(
        <VrButton
          key={`${room}` + "-button"}
          onClick={() => this.clickHandler(room)}
        >
          <Text style={{ backgroundColor: "#156b96", textAlign: "center" }}>
            {room}
          </Text>
        </VrButton>
      );
    });
    return buttons;
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>{this.state.room}</Text>
          {this.createRoomButtons(this.state.adjacentRooms)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "space-between",
    overflow: "scroll",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "transparent",
    borderColor: "#156b96",
    borderWidth: 2,
    overflow: "scroll",
  },
  greeting: {
    color: "#fff",
    fontSize: 30,
  },
});

AppRegistry.registerComponent("Buttons", () => Buttons);
