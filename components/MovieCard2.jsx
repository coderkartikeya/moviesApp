import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const MovieCard2 = ({movie}) => {
    const navigate=useNavigation();
    const dt=async()=>{
        try {
            let movies = [];
            const storedMovies = await AsyncStorage.getItem('movie');
            if (storedMovies) {
                movies = JSON.parse(storedMovies);
            }
            movies.push(data);
            await AsyncStorage.setItem('movie', JSON.stringify(movies));
            
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <TouchableWithoutFeedback
        onPress={()=>{
            navigate.navigate('Movie',movie);
        }}
    >
        <View style={tw`  m-5 w-90 h-100 h flex   rounded-4 shadow-2xl`}>
        
        <Image source={{uri:movie.image}}
        style={tw`w-full h-85 rounded-4 bg-cover`}
        />
        <View style={tw`flex flex-row justify-around items-center`}>
            <Text style={tw`text-white text-2xl font-bold`}>{movie.title}</Text>
            <TouchableWithoutFeedback
            onPress={dt}>
                <Text style={tw`text-white text-xl text-amber-400 `}>Delete</Text>
            </TouchableWithoutFeedback>
        </View>

        </View>
        
    </TouchableWithoutFeedback>
  )
}

export default MovieCard2

const styles = StyleSheet.create({})