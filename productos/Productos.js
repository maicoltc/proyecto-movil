import React from "react";
import { StyleSheet, View, Text } from "react-native";

class Products extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>ESTA ES OTRA VISTA: PRODUCTS</Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: "#00FFAF",
    flex: 1,
  },
  textico: {
    textAlign: "center",
  },
});

export default Products;

