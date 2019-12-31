import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { Operator, Calendar, Document } from '../../../components/Icons';

import { Section, Row, Card } from './Layout';

const PremiumServices = () => (
  <Section title="Mi espacio de banca premier">
    <Row innerPadding={16} style={styles.row}>
      <Card style={styles.card}>
        <Operator style={styles.cardIcon} />
        <Text style={styles.cardText}>Mi Gestor</Text>
      </Card>
      <Card style={styles.card}>
        <Calendar style={styles.cardIcon} />
        <Text style={styles.cardText}>Cita previa</Text>
      </Card>
    </Row>
    <Row style={styles.row}>
      <Card style={[styles.card, { flexDirection: 'row' }]}>
        <Document style={[styles.cardIcon]} />
        <Text style={[styles.cardText, { marginLeft: 15 }]}>Publicaciones</Text>
      </Card>
    </Row>
  </Section>
);

const styles = StyleSheet.create({
  card: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIcon: {
    fontSize: 38,
    color: Colors.primaryColor,
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    color: Colors.primaryTextColor,
  },
});

export default PremiumServices;
