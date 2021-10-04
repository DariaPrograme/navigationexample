import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const Dog =({navigation})=>{
    return(
        <View>
        <Text>Dog</Text>
    <Button
        title="Go to Cat"
        onPress={() => navigation.navigate('Cat')}
    />
        </View>
    )
}
export default Dog;
