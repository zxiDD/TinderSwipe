import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import CardSwiper from './components/CardSwiper';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar false/>
      <CardSwiper />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

