import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../styles/commonStyleSheet'

const LoginScreen = ({navigation}:any) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Login Your Account</Text>
      <Button title='signup' onPress={()=>{
        navigation.replace('SignUp')
      }} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

})