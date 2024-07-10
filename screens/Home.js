import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import tw from 'twrnc'
import FlatCarousel from '../components/FlatCarousel';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { useEffect } from 'react';
import data from '../json/data.json'
import d from '../json/comedy.json'






export default function Home() {
  const[trending,getTrending]=useState([1,2,3,4,5]);
  const [drama,getDrama]=useState([]);
  const [comedy,getComedy]=useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    getDrama(data); 
    getComedy(d);
  }, []);
  

  
  
  return (
    <View style={tw`bg-black w-full h-full`}>
        <SafeAreaView style={tw`mb-5 p-5  flex justify-between items-center`}>
        
          <Text style={tw`text-9 font-bold text-white`}>Movies</Text>
          
        </SafeAreaView>
        <ScrollView
        
        >
        <FlatCarousel data={trending} name={'Trending'}/>

        <FlatCarousel data={drama} name={'Drama'}/> 
        <FlatCarousel data={comedy} name={'Comedy'}/>

        </ScrollView>
                  
        

        

      </View>
  );
}



