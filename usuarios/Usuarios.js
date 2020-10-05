import React from "react";
import { StyleSheet, View, Text } from "react-native";

class Users extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>ESTA ES OTRA VISTA: Users</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFAA00",
    flex: 1,
  },
  textico: {
    textAlign: "center",
  },
});

export default Users;