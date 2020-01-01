import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Colors from '../../../constants/Colors';
import { Section, Card } from './Layout';
import { amountFormatter } from '../../../utilities/formatters';
import * as Icons from '../../../components/Icons';

const data = [
  {
    id: 1,
    icon: 'Shopping',
    origin: 'Fundación Unicef Comite.',
    amount: 20,
    date: '27 Dic',
  },
  { id: 2, icon: 'Cash', origin: 'Red Ofisat S.I.', amount: 156.76, date: '19 Dic' },
  { id: 3, icon: 'Home', origin: 'Gas Natural Servicios Sdg', amount: 115.82, date: '18 Dic' },
];

const ReceipCard = ({ icon, origin, amount, date, onPress }) => {
  const Icon = Icons[icon];

  return (
    <Card style={[styles.card]} onPress={onPress}>
      <View style={styles.iconBorder}>
        <Icon style={styles.cardIcon} />
      </View>
      <Text numberOfLines={2} style={styles.textOrigen}>
        {origin}
      </Text>
      <Text style={styles.textAmount}>{amountFormatter(amount)}</Text>
      <Text style={styles.textDate}>{date}</Text>
    </Card>
  );
};

const MyReceipts = ({ onReceiptClick }) => {
  return (
    <Section title="Mis recibos">
      <ScrollView horizontal={true}>
        {data.map(r => (
          <ReceipCard key={r.id} {...r} onPress={() => onReceiptClick(r)} />
        ))}
      </ScrollView>
    </Section>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,

    width: 180,
    height: 200,

    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  cardIcon: {
    color: Colors.primaryColor,
    fontSize: 28,
  },
  iconBorder: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 5,
  },
  textOrigen: {
    color: Colors.primaryTextColor,
    fontSize: 16,
    marginTop: 5,
    height: 45,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textAmount: {
    color: Colors.primaryTextColor,
    fontSize: 24,
    marginTop: 5,
  },
  textDate: {
    color: Colors.secondaryTextColor,
    fontSize: 18,
    marginTop: 10,
  },
});

export default MyReceipts;
