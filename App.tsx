import 'react-native-gesture-handler';
import React from 'react';
// import NetworkLogger from 'react-native-network-logger';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationController} from './src/navigation/NavigationController';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NetworkLogger /> */}
      <NavigationController />
    </NavigationContainer>
  );
};

export default App;
