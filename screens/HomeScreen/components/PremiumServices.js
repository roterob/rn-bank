import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const PremiumServices = () => (
  <View style={styles.container}>
    <Text>Premium services</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.white,
    marginTop: 5,
  },
});

export default PremiumServices;
