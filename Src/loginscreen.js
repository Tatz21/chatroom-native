import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class loginscreen extends React.Component{
    render(){
        return(
               <View style={styles.container}>
                   <Text>LoginScreen</Text>
               </View>

        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});