import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import * as firebase from 'firebase'

class Logearse extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            response: '',
        }
    }
    render(){
        return (
            <View style={styles.container}> 
                <View style={styles.containerInputs}>
                <TextInput
                    placeholderTextColor="grey"
                    placeholder="Email"
                    style={styles.inputText}
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    placeholderTextColor="grey"
                    placeholder="Password"
                    style={styles.inputText}
                    password={true}
                    onChangeText={(password) => this.setState({password})}
                />
                </View>
                <TouchableHighlight
                    style={[styles.loginButton, styles.button]}                
                >
                    <Text
                        style={styles.textButton}
                    >Login</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={[styles.signupButton, styles.button]}
                >
                    <Text
                        style={styles.textButton}
                    >Signup</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginHorizontal: 15,
    },
    inputText: {
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: '#000',
    },
    button: {
        backgroundColor: '#fffaaa',
        paddingVertical: 20,
        borderRadius: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    textButton:{
        textAlign: 'center'
    },
    containerInputs: {
        marginBottom: 20,
    }
});
export default Logearse;