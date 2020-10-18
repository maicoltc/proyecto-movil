// import React from 'react';
// import {Text, View, StyleSheet, TextInput, TouchableHighlight, AppRegistry} from 'react-native';

// import App from 'App'
// import * as firebase from 'firebase'
// import Login from 'Login'
// import Firebase from './lib/firebase'

// export default class dribbleAppUil extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       initialView : null,
//       userLoaded: false
//     }
//     this.getInitialView()
//     this.getInitialView = this.getInitialView.bind(this)
//   }

//   getInitialView(){
//     firebase.auth().onAuthStateChanged((user) => {
//       let initialView = user ? 'App' : 'Login'

//       this.setState({
//         userLoaded: true,
//         initialView

//       })
//     })
//   }

//   configureScene(route){
//     if(route.sceneConfig){
//       return route.sceneConfig
//     } else {
//       return ({
//         ...Navigator.sceneConfigs.HorizontalSwipeJumpFronRight,
//         gestures: {}
//       });
//     }
//   }

//   renderScene(route, navigator){
//     var globalProps = {navigator}
//     switch(route.id){
//       case 'App':
//         return (
//           <App navigator={navigator}/>
//         )
//       case 'Login':
//         return (
//           <Login navigator={navigator}/>
//         )
//     }
//   }
//   render() {
//     if(this.state.userLoaded) {
//       return (
//         <Navigator
//           initialRoute={{
//             id: this.state.initialView
//           }}
//           renderScene={this.renderScene}
//           configureScene={this.configureScene}
//         />
//       );
//     } else {
//       return null
//     }
//   }
// }

// AppRegistry.registerComponent('dribbleAppUil', () => dribbleAppUil);