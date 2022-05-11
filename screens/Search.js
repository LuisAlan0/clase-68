import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
        style={styles.text}
        >pantalla de busqueda</Text>
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
    },
    text:{
        color: "#ffff" ,
        fontSize: 30
    }
})