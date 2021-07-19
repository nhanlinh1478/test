import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native'
import firebase from 'firebase';
export class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            name:''
        }
        this.onSignUp = this.onSignUp.bind(this);
    }
    onSignUp(){
        const { email , password , name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <View>
                <TextInput placeholder = "name"
                            onChangeText = {(name)=>this.setState({name: name})}
                />
                <TextInput placeholder = "email"
                            onChangeText = {(email)=>this.setState({email: email})}
                />
                <TextInput placeholder = "password"
                            onChangeText = {(password)=>this.setState({password: password})}
                />
                <Button 
                    onPress = {()=>this.onSignUp()}
                    title="Sign Up"
                />
            </View>
        )
    }
}

export default Register
