import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/Colors';
import { Cash, Right } from '../components/Icons';
import { amountFormatter, accountNumberFormatter } from '../utilities/formatters';

const account = 'ES6621000418401234567891';
const receip = { id: 2, icon: 'Cash', origin: 'Red Ofisat S.I.', amount: 156.76, date: '19 Dic' };

const Section = ({ label, value }) => {
  const valueComponent =
    typeof value == 'string' ? <Text style={styles.sectionValue}>{value}</Text> : value;
  return (
    <View style={styles.section}>
      {label && <Text style={styles.sectionLabel}>{label}</Text>}
      {valueComponent}
    </View>
  );
};

const VerReciboLink = () => (
  <View style={{ flexDirection: 'row' }}>
    <Image
      source={require('../assets/images/robot-dev.png')}
      style={{ width: 50, height: 50, resizeMode: 'contain' }}
    />
    <Text
      style={{
        flex: 1,
        color: Colors.primaryTextColor,
        fontSize: 20,
        letterSpacing: 1,
        alignSelf: 'center',
        marginLeft: 10,
      }}
    >
      Ver recibo
    </Text>
    <Right style={{ color: Colors.primaryColor, fontSize: 26, alignSelf: 'center' }} />
  </View>
);

export default function DetailScreen({ navigation }) {
  const receip = navigation.getParam('receip');
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Cash size={68} color={Colors.primaryColor} />
      <Text style={styles.amountText}>{amountFormatter(receip.amount)}</Text>
      <Text style={styles.originText}>{receip.origin}</Text>
      <Section label="Fecha" value={receip.date} />
      <Section label="Cuenta" value={accountNumberFormatter(account)} />
      <Section value={<VerReciboLink />} />
      <Section value={<Text style={styles.link}>Solicitar duplicado</Text>} />
    </ScrollView>
  );
}

DetailScreen.navigationOptions = {
  title: 'Detail',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  amountText: {
    color: Colors.primaryTextColor,
    fontSize: 34,
    marginTop: 10,
  },
  originText: {
    color: Colors.secondaryTextColor,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 40,
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
    alignSelf: 'stretch',
    paddingTop: 15,
    paddingBottom: 15,
  },
  sectionLabel: {
    color: Colors.secondaryTextColor,
    fontSize: 18,
  },
  sectionValue: {
    color: Colors.primaryTextColor,
    fontSize: 18,
  },
  link: {
    marginTop: 10,
    color: Colors.linkTextColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    letterSpacing: 1,
  },
});
