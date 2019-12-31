import React from 'react';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export const HeaderLogo = props => (
  <FontAwesome name="bank" size={28} style={{ marginLeft: 15 }} color="white" />
);

export const Right = props => <AntDesign name="right" {...props} />;

export const Bank = props => <FontAwesome name="bank" {...props} />;

export const Operator = props => <AntDesign name="customerservice" {...props} />;

export const Calendar = props => <FontAwesome name="calendar" {...props} />;

export const Document = props => <AntDesign name="filetext1" {...props} />;

export const Home = props => <AntDesign name="home" {...props} />;

export const Cash = props => <Ionicons name="ios-cash" {...props} />;

export const Shopping = props => <AntDesign name="shoppingcart" {...props} />;
