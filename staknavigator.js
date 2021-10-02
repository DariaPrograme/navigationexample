import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dog from "./dog";
import Cat from "./cat";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator ( ) ;

const StakNavigator=()=>{
return(
    <Stack.Navigator>
        <Stack.Screen name='Dog' component={Dog}/>
        <Stack.Screen name='Cat' component={Cat}/>
    </Stack.Navigator>
)
}
export default StakNavigator;
