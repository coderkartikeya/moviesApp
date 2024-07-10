import { Dimensions,  Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
// import Carousel from 'react-native-snap-carousel'
import tw from 'twrnc';
// import Carousel from 'react-native-reanimated-carousel';
import MovieCard from './MovieCard';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {height,width}=Dimensions.get('window');

const FlatCarousel = ({data,name}) => {
  const navigation = useNavigation();
    const sliderWidth = width;
    const itemWidth = width * 0.7;
    const renderItem = ({item}) => {
      
        return (
            <MovieCard movie={item} />
            )
            }
    
    
  return (
    <View>
        <View style={tw`flex justify-between flex-row`}>
        <Text style={tw`text-white mx-4 text-5`}>{name}</Text>
        <TouchableWithoutFeedback
        onPress={() => navigation.navigate('MovieList')}
        >
          <Text style={tw`text-amber-400 mx-4 text-5`}>View all</Text>
        </TouchableWithoutFeedback>

        </View>
      
        
        
        <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        
        />
      
    </View>
  )
}

export default FlatCarousel

