import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFade = (initialValue: number = 0) => {
  const opacity = useRef(new Animated.Value(initialValue)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: initialValue,
      duration,
      useNativeDriver: true,
    }).start(() => {});
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
