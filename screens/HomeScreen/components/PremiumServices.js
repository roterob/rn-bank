import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { Operator, Calendar, Document } from '../../../components/Icons';

const Row = ({ innerPadding = 0, style = {}, children }) => {
  const margin = innerPadding > 0 ? innerPadding / 2 : 0;

  return (
    <View style={[style, { flexDirection: 'row' }]}>
      {React.Children.map(children, (child, index) => {
        const marginLeft = index == 0 ? 0 : margin;
        const marginRight = index == children.length - 1 ? 0 : margin;

        return <View style={{ flex: 1, marginLeft, marginRight }}>{child}</View>;
      })}
    </View>
  );
};

const Card = ({ style = {}, children }) => (
  <View
    style={[
      {
        elevation: 2,
        borderRadius: 4,
        flex: 1,
        backgroundColor: Colors.white,
        borderColor: Colors.borderColor,
        borderWidth: 1,
      },
      style,
    ]}
  >
    {children}
  </View>
);

const PremiumServices = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Mi espacio de banca premier</Text>
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
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: 5,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: Colors.primaryColor,
    textTransform: 'uppercase',
  },
  row: {
    marginTop: 10,
    height: 100,
  },
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
