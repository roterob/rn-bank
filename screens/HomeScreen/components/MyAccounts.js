import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import Colors from '../../../constants/Colors';
import { Right } from '../../../components/Icons';
import ResaltBlock from './ResaltBlock';
import LastMovements from './LastMovement';
import AccountsCarusel from './AccountsCarusel';
import { amountFormatter } from '../../../utilities/formatters';

const MyAccounts = ({ data: { accounts, lastMovements } }) => {
  const [currentAccount, setCurrentAccount] = useState(accounts[0].account);
  const total = useMemo(
    () => amountFormatter(accounts.reduce((acum, acc) => acum + acc.amount, 0)),
    [accounts],
  );
  const handleAccountChange = account => {
    setCurrentAccount(account);
  };

  const accountLastMovements = lastMovements.filter(m => m.account === currentAccount);
  return (
    <View>
      <View style={styles.container1}>
        <Text style={{ fontSize: 18, color: Colors.white, textTransform: 'uppercase' }}>
          My accounts <Right size={18} />
        </Text>
        <Text style={{ fontSize: 15, color: Colors.thirdColor, marginTop: 5, fontStyle: 'italic' }}>
          Total: {total}
        </Text>
      </View>
      <View style={styles.container2}>
        <ResaltBlock />
        <LastMovements key={currentAccount} data={accountLastMovements} />
      </View>
      <AccountsCarusel data={accounts} onChange={handleAccountChange} />
    </View>
  );
};

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
