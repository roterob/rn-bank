import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { Bank } from '../../../components/Icons';

const ResaltBlock = ({ icon, text1, text2 }) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Bank size={18} color={Colors.white} styles={styles.icon} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.text1}>¿Tienes cuentas en otros bancos?</Text>
      <Text style={styles.text2}>Añádelas y consulta tus movimientos</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: Colors.thirdColor,
    flexDirection: 'row',
  },
  iconContainer: {
    width: 36,
    height: 36,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 18,
    paddingTop: 7,
    paddingLeft: 8,
    marginTop: 2,
  },
  icon: {},
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text1: {
    fontWeight: 'bold',
    fontFamily: 'space-mono',
    color: Colors.primaryTextColor,
  },
  text2: {
    color: Colors.secondaryTextColor,
  },
});

export default ResaltBlock;
