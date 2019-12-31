import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { Right } from '../../../components/Icons';
import ResaltBlock from './ResaltBlock';
import LastMovements from './LastMovement';
import AccountsCarusel from './AccountsCarusel';

const MyAccounts = () => (
  <View>
    <View style={styles.container1}>
      <Text style={{ fontSize: 18, color: Colors.white, textTransform: 'uppercase' }}>
        My accounts <Right size={18} />
      </Text>
      <Text style={{ fontSize: 15, color: Colors.thirdColor, marginTop: 5, fontStyle: 'italic' }}>
        Total: 25.777,78€
      </Text>
    </View>
    <View style={styles.container2}>
      <ResaltBlock />
      <LastMovements />
    </View>
    <AccountsCarusel />
  </View>
);

const styles = StyleSheet.create({
  container1: {
    backgroundColor: Colors.secondaryColor,
    height: 130,
    alignItems: 'center',
    padding: 20,
  },
  container2: {
    backgroundColor: Colors.white,
    paddingTop: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default MyAccounts;
