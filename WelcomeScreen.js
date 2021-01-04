import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import db from '../Config.js';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
  constructor(){
      super();
      this.state ={
          emailId:'',
          Password:'',
      }
  }
  userLogin = (emailId, password)=>{
       firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{ 
            return Alert.alert("Successfully Login") }) 
            .catch((error)=> {
                 var errorCode = error.code; 
                var errorMessage = error.message;
                 return Alert.alert(errorMessage) 
                }) 
                } 
                 userSignUp = (emailId, password) =>{
                      firebase.auth().createUserWithEmailAndPassword(emailId, password) 
                      .then((response)=>{
                           return Alert.alert("User Added Successfully") }) 
                           .catch(function(error) {
                                // Handle Errors here. 
                                var errorCode = error.code; 
                                var errorMessage = error.message; 
                                return Alert.alert(errorMessage) 
                            });
                             }

    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <Text style = {styles.title}>Book Santa</Text>
                </View>
                <View>
                    <TextInput 
                    style = {styles.loginBox}
                    placeholder = "abc@example.com"
                    keyboardType = 'email-address'
                    onChangeText = {(text) => {
                        this.setState({
                            emailId: text                            
                        })
                    }}/>
                    <TextInput 
                    style = {styles.loginBox}
                    secureTextEntry = {true}
                    placeholder = "Enter Password"
                    onChangeText = {(text) => {
                        this.setState({
                            Password: text                            
                        })
                    }}/>
                    <TouchableOpacity
                    style = {[styles.button, {marginBottom: 20, marginTop: 20}]}
                    onPress = {()=>{
                        this.userLogin(this.state.emailId, this.state.Password)
                    }}>
                        <Text style = {styles.buttonText}>Log In</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                    style = {[styles.button, {marginBottom: 20, marginTop: 20}]}
                    onPress = {()=>{
                        this.userSignUp(this.state.emailId, this.state.Password)
                    }}>
                        <Text style = {styles.buttonText}>Sign Up</Text>
                          </TouchableOpacity>
                </View>
            </View>
            );
    }
}
