import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieData} from '../interfaces/movieInterface';

interface Props {
  movieDetails: MovieData;
  cast: Cast[];
}

export const MovieDetails = ({movieDetails, cast}: Props) => {
  return (
    <>
      {/* Details */}
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon name="star-outline" color={'grey'} size={16} />
          <Text>{movieDetails.vote_average}</Text>
          <Text style={styles.genre}>
            - {movieDetails.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        {/* Story */}
        <Text style={styles.sectionTitle}>Story</Text>
        <Text style={styles.info}>{movieDetails.overview}</Text>
        {/* Budget */}
        <Text style={styles.sectionTitle}>Budget</Text>
        <Text style={styles.info}>
          {new Intl.NumberFormat('es-US', {
            style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 3,
          }).format(movieDetails.budget)}
        </Text>
      </View>

      {/* Casting */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
  },
  genre: {
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
  },
});
