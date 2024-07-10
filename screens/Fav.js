import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import tw from 'twrnc'
import MovieCard2 from '../components/MovieCard2';

const Fav = () => {
  const [fav, setFav] = useState([])
  useEffect(()=>{
    const get=async()=>{
      const data=await AsyncStorage.getItem('movie')
      setFav(JSON.parse(data))
    }
    get()
  },[])
  const renderitem=({item})=>{
    return (
      <MovieCard2 movie={item}/>
    )
  }
  return (
    <View style={tw`flex justify-center items-center mb-10 bg-black`}>
      <SafeAreaView
      style={tw`m-10`}
      >
        <Text style={tw`text-4xl text-center font-bold text-white`}>Favourites</Text>

      </SafeAreaView>

      <FlatList
      data={fav}
      renderItem={renderitem}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Fav

const styles = StyleSheet.create({})