import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Platform, KeyboardAvoidingView, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
// import { useState } from 'react';

const LoginMain = () => {
  const navigation = useNavigation();
  const [username,getUserName]=useState();
  const [password,getUserPassword]=useState();

  const handleUsername=(text)=>{
    getUserName(text);

  }
  const handlePassword=(text)=>{
    getUserPassword(text);
    }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}      
    >
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
      >
        <View style={tw`flex justify-center items-center h-full w-full`}>
          <Text style={tw`text-6xl font-bold mt-20`}>Login</Text>
          <View style={tw`m-10 w-4/5 p-5`}>
            <Text style={tw`text-xl mx-3`}>Username</Text>
            <View style={tw`border w-full m-4 p-3 rounded-md`}>
              <TextInput
                placeholder='Enter username'
                onChangeText={handleUsername}
                style={tw`text-lg`}
                
              />
            </View>

            <Text style={tw`text-xl mx-3`}>Password</Text>
            <View style={tw`border w-full m-4 p-3 rounded-md`}>
              <TextInput
                placeholder='Enter password'
                style={tw`text-lg`}
                secureTextEntry={true}
                onChangeText={handlePassword}
                
              />
            </View>
            <Button title='Login' onPress={() => { navigation.navigate('Home') }} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default LoginMain;
