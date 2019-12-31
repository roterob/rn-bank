import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination, getInputRangeFromIndexes } from 'react-native-snap-carousel';
import Colors from '../../../constants/Colors';
import { amountFormatter, accountNumberFormatter } from '../../../utilities/formatters';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = 80;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const accountsData = [
  { account: 'ES6621000418401234567891', amount: 4680.78 },
  { account: 'ES9420805801101234567891', amount: 160.0 },
];

const AccountsCarusel = () => {
  const [activeIndex, setActiveIndes] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={accountsData}
        sliderWidth={viewportWidth}
        sliderHeight={100}
        itemWidth={slideWidth}
        inactiveSlideOpacity={1}
        renderItem={({ item, index }) => (
          <View style={styles.slide}>
            <View style={styles.slideContent}>
              <Text style={styles.textAccount}>{accountNumberFormatter(item.account)}</Text>
              <Text style={styles.textAmount}>{amountFormatter(item.amount)}</Text>
            </View>
          </View>
        )}
        onSnapToItem={index => setActiveIndes(index)}
      />
      <Pagination
        dotsLength={accountsData.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.pagination}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 80,
  },
  slide: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: Colors.white,
    height: 105,
    borderRadius: 8,
    margin: 5,
    elevation: 5,
  },
  slideContent: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  textAccount: {
    color: Colors.primaryTextColor,
    fontSize: 15,
  },
  textAmount: {
    marginTop: 5,
    fontSize: 28,
    color: Colors.secondaryColor,
  },
  pagination: {
    top: -20,
  },
});

export default AccountsCarusel;
