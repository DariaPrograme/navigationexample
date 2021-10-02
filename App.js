import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StakNavigator from "./staknavigator";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
      <NavigationContainer>
        <StakNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
