import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Colors from '../../../constants/Colors';

export const Section = ({ title, children }) => {
  const titleComponet =
    typeof title === 'string' ? <Text style={styles.title}>{title}</Text> : title;
  return (
    <View style={styles.container}>
      <React.Fragment>
        {title && titleComponet}
        {children}
      </React.Fragment>
    </View>
  );
};

export const Row = ({ innerPadding = 0, style = {}, children }) => {
  const margin = innerPadding > 0 ? innerPadding / 2 : 0;

  return (
    <View style={[styles.row, style]}>
      {React.Children.map(children, (child, index) => {
        const marginLeft = index == 0 ? 0 : margin;
        const marginRight = index == children.length - 1 ? 0 : margin;

        return <View style={{ flex: 1, marginLeft, marginRight }}>{child}</View>;
      })}
    </View>
  );
};

export const Card = ({ style, children, onPress, ...props }) => (
  <TouchableWithoutFeedback onPress={onPress}>
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
      {...props}
    >
      {children}
    </View>
  </TouchableWithoutFeedback>
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
    flexDirection: 'row',
  },
});
