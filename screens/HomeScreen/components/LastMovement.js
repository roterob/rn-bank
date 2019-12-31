import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { amountFormatter } from '../../../utilities/formatters';

const data = [
  { _id: 1, date: 'Lunes', concept: 'Reint. cajero', amount: -160.0 },
  { _id: 2, date: '10 Dic', concept: 'Farmacia Reviejo', amount: -10.44 },
  { _id: 3, date: '10 Dic', concept: 'Factura F201900123', amount: 955.59 },
];

const LastMovements = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={{ color: Colors.secondaryTextColor }}>Últimos movimientos</Text>
      <Text style={{ color: Colors.linkTextColor, textAlign: 'right', flex: 1 }}>Ver todos</Text>
    </View>
    {data.map(r => (
      <View key={r._id} style={styles.row}>
        <Text style={styles.cell1}>{r.date}</Text>
        <Text style={styles.cell2}>{r.concept}</Text>
        <Text
          style={[styles.cell3, { color: r.amount > 0 ? Colors.green : Colors.primaryTextColor }]}
        >
          {amountFormatter(r.amount)}
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
  },
  row: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  cell1: { color: Colors.secondaryTextColor, width: 70 },
  cell2: { color: Colors.primaryTextColor, flex: 1 },
  cell3: { color: Colors.primaryTextColor, fontSize: 16, textAlign: 'right' },
});

export default LastMovements;
