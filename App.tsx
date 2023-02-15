import 'react-native-gesture-handler';
import React from 'react';
// import NetworkLogger from 'react-native-network-logger';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationController} from './src/navigation/NavigationController';
import {GradientProvider} from './src/context/GradientContext';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      {/* <NetworkLogger /> */}
      <AppState>
        <NavigationController />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
