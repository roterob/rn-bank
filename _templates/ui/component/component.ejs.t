---
to: <%=path%>/<%=name%>.js
---

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const <%=name%> = () => (
  <View style={styles.container}>
    <Text>New component</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
  },
});

export default <%=name%>;


