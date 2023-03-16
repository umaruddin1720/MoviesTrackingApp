//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {IMAGE_POSTER} from '../config';
import {Colors} from '../Styles/Colors';
import {GET} from '../Services/Api';

// create a component
const TrendingPeople = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      let response = await GET('/trending/person/week');
      setPeople(response?.results);
      setLoading(false);
    };
    getPeople();
  }, []);

  const displayPeople = ({item}) => {
    const imagePath = item.profile_path
      ? `${IMAGE_POSTER}${item.profile_path}`
      : null;
    return (
      <View style={{marginHorizontal: 5}}>
        {imagePath && (
          <Image
            source={{uri: imagePath}}
            style={{borderRadius: 100, height: 70, width: 70}}
          />
        )}
        <Text
          style={{
            color: Colors.textColor,
            width: 70,
            textAlign: 'center',
            marginTop: 10,
          }}>
          {item?.name}
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
            Trending People
          </Text>
        </View>
      )}
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={people}
          renderItem={displayPeople}
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
export default TrendingPeople;
