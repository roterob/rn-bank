import React from 'react';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export const HeaderLogo = props => (
  <FontAwesome name="bank" size={28} style={{ marginLeft: 15 }} color="white" />
);

export const Right = props => <AntDesign name="right" {...props} />;

export const Bank = props => <FontAwesome name="bank" {...props} />;
