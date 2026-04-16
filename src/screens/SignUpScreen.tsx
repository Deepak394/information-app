import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyles } from "../styles/commonStyleSheet";

const SignUpScreen = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
     
      <Text style={commonStyles.title}>Get Your Free Account</Text>
      <Button
        title="signup"
        onPress={() => {
          navigation.replace("Login");
        }}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({

});
