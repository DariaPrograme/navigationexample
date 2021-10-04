import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from "react-native-web";
const Cat =({navigation})=>{
    return(
       <View>
        <Text>Cat</Text>
        <Button
        title="Birt"
        onPress={()=> navigation.navigate("Burts")}
        />
       </View>
    )
}
export default Cat;
