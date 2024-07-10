import {  Image, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieCard = ({movie}) => {
    const navigate=useNavigation();
    
  return (
    <TouchableWithoutFeedback
        onPress={()=>{
            navigate.navigate('Movie',movie);
        }}
    >
        <View style={tw` bg-slate-400 m-5 w-[200px] flex justify-center items-center h-[200px] rounded-4 shadow-2xl`}>
        {/* <Text style={tw`text-white text-10`}>lol</Text> */}
        <Image source={{uri:movie.image}}
        style={tw`w-full h-full rounded-4`}
        />

        </View>
        
    </TouchableWithoutFeedback>
  )
}

export default MovieCard

