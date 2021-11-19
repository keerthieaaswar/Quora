import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import styles from 'assets/styles/globalStyles';
import Home from 'views/Home';

const RobotoBold = require('assets/fonts/Roboto-Bold.ttf');
const RobotoRegular = require('assets/fonts/Roboto-Regular.ttf');
const RobotoLight = require('assets/fonts/Roboto-Light.ttf');
const RobotoMedium = require('assets/fonts/Roboto-Medium.ttf');
const RobotoThin = require('assets/fonts/Roboto-Thin.ttf');

const App = () => {
  const [isFontLoaded, setFontLoaded] = useState<boolean>(false);

  const loadFontAsync = async () =>
    Promise.all([
      Font.loadAsync({
        'Roboto-Bold': RobotoBold,
        'Roboto-Regular': RobotoRegular,
        'Roboto-Light': RobotoLight,
        'Roboto-Medium': RobotoMedium,
        'Roboto-Thin': RobotoThin,
      }),
    ]);

  useEffect(() => {
    loadFontAsync().then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!isFontLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' animated={true} backgroundColor='#f7f6f8' />
      <Home />
    </SafeAreaView>
  );
};

export default App;
