import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Search from '../screens/Search';
import Transaction from '../screens/Transaction';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="transaccion" component={Transaction}>
                    </Tab.Screen>

                    <Tab.Screen name="busqueda" component={Search}>
                    </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}