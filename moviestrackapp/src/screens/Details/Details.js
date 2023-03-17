//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {IMAGE_POSTER} from '../../config';
import {Colors} from '../../Styles/Colors';
import {GET} from '../../Services/Api';
import Icon from 'react-native-vector-icons/Entypo';

// create a component
const Details = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      const data = await GET(`/movie/${props.route.params.movieID}`);
      setDetails(data);
      setLoading(false);
    };

    getDetail();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={30} color={'red'} />
      ) : (
        <View>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER}${details.backdrop_path}`}}
              style={styles.imagePoster}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: Colors.textColor,
                  textAlign: 'center',
                  marginTop: 10,
                  fontWeight: 'bold',
                }}>
                {details?.original_title}
              </Text>
              {details?.homepage ? (
                <View>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(details?.homepage)}>
                    <Icon name="link" size={35} color={'white'} />
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  color: Colors.textColor,
                  textAlign: 'center',
                  marginTop: 10,
                  fontWeight: 'bold',
                }}>
                OverView
              </Text>
              <Text
                style={{
                  color: Colors.secondaryColor,
                  marginTop: 10,
                  textAlign: 'center',
                }}>
                {details?.overview}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  color: Colors.textColor,
                  textAlign: 'center',
                  marginTop: 20,
                  fontWeight: 'bold',
                }}>
                Details
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-around',
              }}>
              <View>
                <Text style={{fontSize: 20, color: Colors.fadedColor}}>
                  BUDGET
                </Text>
                <Text
                  style={{color: Colors.secondaryColor, textAlign: 'center'}}>
                  {details.budget}
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, color: Colors.fadedColor}}>
                  DURATION
                </Text>
                <Text
                  style={{color: Colors.secondaryColor, textAlign: 'center'}}>
                  {`${details.runtime} Mins`}
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, color: Colors.fadedColor}}>
                  RELEASE DATE
                </Text>
                <Text
                  style={{color: Colors.secondaryColor, textAlign: 'center'}}>
                  {details.release_date}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.baseColor,
  },
  imagePoster: {
    width: '100%',
    height: 300,
  },
});

//make this component available to the app
export default Details;
