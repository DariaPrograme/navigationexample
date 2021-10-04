import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Burts =({navigation})=>{
    return(
        <View>
        <Text>burts</Text>
            <Button
            title="Go to parents"
            onPress={() =>navigation.navigate('Perents')}
            />


        </View>
    )
}
export default Burts;

