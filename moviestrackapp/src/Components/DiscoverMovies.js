//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {IMAGE_POSTER} from '../config';
import {Colors} from '../Styles/Colors';
import {GET} from '../Services/Api';

// create a component
const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/discover/movie');
      setMovies(response?.results);

      const backimage = [];
      for (let i = 0; i < 10; i++) {
        backimage.push(`${IMAGE_POSTER}${response.results[i].backdrop_path}`);
      }
      setImages(backimage);
    };
    getMovies();
  }, []);

  return (
    <View>
      {images.length > 0 && (
        <SliderBox images={images} dotColor={Colors.secondaryColor} />
      )}
    </View>
  );
};

export default DiscoverMovies;
