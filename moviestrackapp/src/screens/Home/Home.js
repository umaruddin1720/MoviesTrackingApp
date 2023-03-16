//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../Styles/Colors';
import DiscoverMovies from '../../Components/DiscoverMovies';
import TrendingPeople from '../../Components/TrendingPeople';
import TrendingMovies from '../../Components/TrendingMovies';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <DiscoverMovies />
      <TrendingPeople />
      <TrendingMovies />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.baseColor,
  },
});

//make this component available to the app
export default Home;
