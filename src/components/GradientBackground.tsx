import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const GradientBackground = () => {
  return (
    <LinearGradient
      colors={[
        '#272430', '#2b1f44', '#2a1257', '#100a1c'
      ]}
      locations={[0,0.25,0.5,1]}

      style={styles.gradient}
    />
  );
};

const styles = StyleSheet.create({
  gradient: {
    width,
    height,
    position: 'absolute',
  },
});
