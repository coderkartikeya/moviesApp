import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home' ;
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Search from './screens/Search';
import Fav from './screens/Fav';
import Movie from './screens/Movie';
import MovieList from './screens/MovieList';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Movie" component={Movie} options={{headerShown:false}}/>
      <Stack.Screen name="MovieList" component={MovieList} options={{headerShown:false}}/>
    </Stack.Navigator>


  )
}
const TabNavigator=()=>{
  return(
    <Tab.Navigator  screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle:{
        backgroundColor:'black'
      },
      tabBarActiveTintColor:'white', 
      tabBarInactiveTintColor:'gray',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
    
        if (route.name === 'Login') {
          iconName = focused ? 'lock-open' : 'lock-closed';
        } else if (route.name === 'Main') {
          iconName = focused ? 'home' : 'home-outline';
        }
        else if(route.name=='Search'){
          iconName=focused? 'search' : 'search-outline';
        }
        else if(route.name=='Favourite'){
          iconName=focused? 'heart' : 'heart-outline';
        }
    
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
            
            <Tab.Screen name="Main" component={StackNavigator} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Favourite" component={Fav} />
            {/* <Tab.Screen name="Home" component={Home} /> */}
    
          </Tab.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>      
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});