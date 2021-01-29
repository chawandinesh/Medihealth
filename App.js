/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  HomeScreen,
  CategoriesScreen,
  AddDetailsScreen,
  DetailsScreen,
} from './App/screens';
import Navigator from './App/routes/navigator';
import Context from './App/screens/context';

const App = () => {
  return (
    <Context>
      <Navigator />
    </Context>
  );
};

export default App;
