import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Transaction extends ReactComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text
        style= {{color: "#ffff" ,fontSize: 30}}
        >pantalla de transaccion</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#565D4"
    }
})