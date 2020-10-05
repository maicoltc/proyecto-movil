import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";


class Inicio extends React.Component {
  render() {
    return (
      <View style={style.fixToText}>
        <Button
        title="Productos"
        onPress={() => this.props.navigation.navigate('Products')}
        color="#841584"
        />
        <Button
        title="Usuarios"
        onPress={() => this.props.navigation.navigate('Users')}
        />
        <Button
        title="Login"
        onPress={() => this.props.navigation.navigate('Logearse')}
        color="#841522"
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF00",
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'column-reverse',
    justifyContent: 'center',
  },
});

export default Inicio;

