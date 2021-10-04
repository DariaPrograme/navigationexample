import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dog from "./dog";

const Perents =({navigation})=>{
    return(
        <View>
        <Text>perents</Text>
            <Button
                title="go to Dog"
                onPress={()=>navigation.navigate('Dog')}
            />
        </View>
    )
}
export default Perents;
