import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  cast: Cast;
}

export const CastItem = ({cast}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;

  return (
    <View style={styles.container}>
      {cast.profile_path && <Image source={{uri}} style={styles.avatar} />}
      <View style={styles.castInfo}>
        <Text style={styles.name}>{cast.name}</Text>
        <Text style={styles.character}>{cast.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    // marginHorizontal: 20,
    marginLeft: 20,
    marginRight: 5,
    paddingRight: 15,
    overflow: 'hidden',
    height: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: {
    fontSize: 16,
    opacity: 0.7,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  castInfo: {
    marginLeft: 10,
    marginTop: 2,
  },
});
