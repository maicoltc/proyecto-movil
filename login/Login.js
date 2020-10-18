// import React from "react";
// import {Text, View, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
// import * as firebase from 'firebase'

// class Logearse extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             email: '',
//             password: '',
//             response: '',
//         }
//     }
//     render(){
//         return (
//             <View style={styles.container}> 
//                 <View style={styles.containerInputs}>
//                 <TextInput
//                     placeholderTextColor="grey"
//                     placeholder="Email"
//                     style={styles.inputText}
//                     onChangeText={(email) => this.setState({email})}
//                 />
//                 <TextInput
//                     placeholderTextColor="grey"
//                     placeholder="Password"
//                     style={styles.inputText}
//                     password={true}
//                     onChangeText={(password) => this.setState({password})}
//                 />
//                 </View>
//                 <TouchableHighlight
//                     style={[styles.loginButton, styles.button]}                
//                 >
//                     <Text
//                         style={styles.textButton}
//                     >Login</Text>
//                 </TouchableHighlight>
//                 <TouchableHighlight
//                     style={[styles.signupButton, styles.button]}
//                 >
//                     <Text
//                         style={styles.textButton}
//                     >Signup</Text>
//                 </TouchableHighlight>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 30,
//         marginHorizontal: 15,
//     },
//     inputText: {
//         height: 50,
//         borderWidth: 1,
//         borderColor: '#000',
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         color: '#000',
//     },
//     button: {
//         backgroundColor: '#fffaaa',
//         paddingVertical: 20,
//         borderRadius: 5,
//         marginBottom: 10,
//         borderWidth: 1,
//         borderColor: '#000',
//     },
//     textButton:{
//         textAlign: 'center'
//     },
//     containerInputs: {
//         marginBottom: 20,
//     }
// });
// export default Logearse;

import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Inputs from './Inputs';

const image = { uri: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&w=1000&q=80" };

class Login extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View>
                    <Inputs navigation={this.props.navigation}/>
                </View>

                <TouchableOpacity style={styles.boton}
                    onPress={() => this.props.navigation.navigate('Inicio')}>
                    <Text style={styles.textoBoton}>Inicio</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: 520
    },
    textico: {
        textAlign: 'center',
        margin: 3,
        fontSize: 16,
        color: 'white'
    },
    image: {
        height: 500,
        resizeMode: "cover",
        alignItems: 'center'
    },
    boton: {
        alignItems: 'center',
        width: '45%'
    },
    textoBoton: {
        color: 'lightblue'
    }       
});

export default Login;