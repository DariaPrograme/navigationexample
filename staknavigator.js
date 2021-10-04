import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dog from "./dog";
import Cat from "./cat";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Perents from "./perents";
import Burts from "./burts";
const Stack = createNativeStackNavigator ( ) ;

const StakNavigator=()=>{
return(
    <Stack.Navigator>
        <Stack.Screen name='Dog' component={Dog}/>
        <Stack.Screen name='Cat' component={Cat}/>
        <Stack.Screen name='Burts' component={Burts}/>
        <Stack.Screen name='Perents' component={Perents}/>
    </Stack.Navigator>
)
}
export default StakNavigator;
