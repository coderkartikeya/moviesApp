import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import LoginMain from '../components/LoginMain';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native-web';




const Login = () => {
  
  return (
    <View style={tw`flex p-10 m-10 `}>
      <LoginMain/>
      
    </View>
  )
}

export default Login