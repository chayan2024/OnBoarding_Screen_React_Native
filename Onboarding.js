// Onboarding.js
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import OnboardingScreen3 from './OnboardingScreen3';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Swiper loop={false} showsButtons={false} showsPagination={true} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
        <OnboardingScreen1 />
        <OnboardingScreen2 />
        <OnboardingScreen3 />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});

export default Onboarding;
