import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import tw from 'twrnc'
import { Button, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';



const Movie = () => {
    const navigate=useNavigation();
    const route = useRoute();
    const data=route.params;
    
    const save=async()=>{
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
        

    
    const renderitem=({item})=>{
         
        return(
            <View style={tw`  m-5 flex flex-col`}>
                <Image source={(item.image=="")? require('../assets/image.png'):{uri:item.image}} alt={`Actor`}
                style={tw`w-30 h-30 rounded-100`}
                />
                <Text style={tw`text-white text-center m-3 text-4 font-bold `}>{item.name}</Text>
            </View>
        )

    }
    const renderimage=({item})=>{
        return(
            <View style={tw`w-50 m-3`}>
                <Image source={{uri:item}} style={tw`w-50 h-40 `} resizeMode="cover"/>

            </View>
            
        )
    }
  return (
    <ScrollView
    style={tw`w-full h-full bg-black `}
    showsVerticalScrollIndicator={false}
    >
    <View 
    style={tw`w-full h-full bg-black`}
    >
        <SafeAreaView
        style={tw`m-10 flex justify-between flex-row`}
        >
            <TouchableWithoutFeedback 
            onPress={()=>{
                navigate.goBack();
            }}
            
            
            >
                <View style={tw`bg-amber-400 w-[10] h-[10] flex justify-around items-center rounded-1  `}>
                <Ionicons name={'arrow-back'} color={'black'} size={20}/>
                
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback 
            onPress={save}
            
            
            >
                <View style={tw`bg-amber-400 w-[10] h-[10] flex justify-around items-center rounded-1 `}>
                <Ionicons name={'heart'} color={'black'} size={20}/>
                
                </View>
            </TouchableWithoutFeedback>
            
            
        </SafeAreaView>

        <Text style={tw`text-white text-4xl font-bold text-center `}>{data.title}</Text>
            <View style={tw`shadow-lg shadow-slate-400 `}>
                <Image source={{uri:data.image}} 
                style={tw`h-[100] w-full rounded-3 `}
                />
            </View>
            <View style={tw`m-6 flex justify-around items-center flex-row gap-3 border-2 border-white p-4 rounded-3 `}>
                <Text style={tw`text-slate-400 text-2xl `}>{data.year}</Text>
                <Text style={tw`text-slate-400 text-4xl `}>|</Text>
                <Text style={tw`text-slate-400 text-2xl`}>{data.duration}</Text>
            </View>
            <View style={tw`p-3`}>
                <Text style={tw`text-white text-4xl font-bold text-center p-5`}>Overview</Text>
                <Text style={tw`text-white p-3 text-lg`}>{data.summary}</Text>
            </View>
            <View>
                <FlatList
                data={data.images}
                renderItem={renderimage}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={tw`w-full h-[70] mb-10`}>
                <Text style={tw`text-white text-4xl font-bold text-center p-5`}>Cast</Text>
                <FlatList
                data={data.cast}
                renderItem={renderitem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                />
            </View>

      
    </View>
    </ScrollView>
  )
}

export default Movie

const styles = StyleSheet.create({})