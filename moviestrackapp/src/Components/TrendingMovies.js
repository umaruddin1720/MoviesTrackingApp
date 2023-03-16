//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {POSTER_IMAGE} from '../config';
import {Colors} from '../Styles/Colors';
import {GET} from '../Services/Api';

const TrendingMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      let response = await GET('/movie/top_rated');
      setMovies(response?.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  const displayMovies = ({item}) => {
    return (
      <View style={{marginHorizontal: 5}}>
        <Image
          source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
          style={{
            borderRadius: 10,
            height: 130,
            marginHorizontal: 2,
            width: 120,
          }}
        />
        <Text
          style={{
            color: Colors.textColor,
            width: 70,
            textAlign: 'center',
            marginTop: 10,
          }}>
          {item?.original_title}
        </Text>
      </View>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size={30} color={'red'} />
      ) : (
        <View>
          <Text style={{color: Colors.fadedColor, fontSize: 19, margin: 10}}>
            Trending Movies
          </Text>
        </View>
      )}
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={movies}
          renderItem={displayMovies}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default TrendingMovies;
