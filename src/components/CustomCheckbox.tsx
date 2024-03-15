import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomCheckbox = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity
      style={[styles.checkboxBase, value && styles.checkboxChecked]}
      onPress={onValueChange}
    >
      {value && <Text style={styles.checkboxLabel}>✓</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
  },
  checkboxChecked: {
    backgroundColor: '#3c1f7b',
  },
  checkboxLabel: {
    color: 'white',
  },
});

export default CustomCheckbox;
