import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dog from "./dog";
import Cat from "./cat";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {createNativeStackNavigator} from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator ( ) ;
const Tab = createMaterialBottomTabNavigator();
const TabNavigator=()=>{
return(
    <Tab.Navigator>
        <Tab.Screen name='Dog' component={Dog}/>
        <Tab.Screen name='Cat' component={Cat}/>
    </Tab.Navigator>
)
}
export default TabNavigator;
