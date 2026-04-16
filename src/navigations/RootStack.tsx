import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerStyle: { },
    headerTitleAlign: 'center',
    headerShown: false
  }}>
        <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp"  component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack

const styles = StyleSheet.create({})