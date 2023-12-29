// OnboardingScreen1.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OnboardingScreen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Onboarding Screen 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

export default OnboardingScreen2;
