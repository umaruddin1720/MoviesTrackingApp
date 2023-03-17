//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import {Colors} from './src/Styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import Details from './src/screens/Details/Details';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const headerStyle = {
  title: 'Movies',
  headerStyle: {backgroundColor: Colors.baseColor},
  headerTitleStyle: {color: Colors.textColor},
  headerLeft: () => (
    <TouchableOpacity>
      <Icon name="menu" size={30} color={Colors.textColor} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity>
      <Icon name="search" size={30} color={Colors.textColor} />
    </TouchableOpacity>
  ),
};
export default App;
