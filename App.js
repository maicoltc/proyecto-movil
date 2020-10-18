/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './bienvenida/Inicio';
import Products from './productos/Productos';
import Users from './usuarios/Usuarios';
import Logearse from './login/Login';
import Registro from './registro/Registro';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logearse">
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'BIENVENIDOS' }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ title: 'WELCOME TO PRODUCTS' }}
        />
        <Stack.Screen
          name="Users"
          component={Users}
          options={{ title: 'WELCOME TO USERS' }}
        />
        <Stack.Screen
          name="Logearse"
          component={Logearse}
          options={{ title: 'PLEASE REGISTER' }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{title: 'Registro'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


