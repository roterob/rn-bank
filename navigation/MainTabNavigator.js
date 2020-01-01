import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import StorybookUI from '../screens/StorybookUI';
import DetailScreen from '../screens/DetailScreen';

import Colors from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.tintColor,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const DetailStack = createStackNavigator(
  {
    Links: DetailScreen,
  },
  config,
);

DetailStack.navigationOptions = {
  tabBarLabel: 'Detail',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

DetailStack.path = '';

const StorybookUIStack = createStackNavigator(
  {
    Storybook: StorybookUI,
  },
  config,
);

StorybookUIStack.navigationOptions = {
  tabBarLabel: 'Storybook',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

StorybookUIStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    DetailStack,
    StorybookUIStack,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
      inactiveTintColor: Colors.tabIconDefault,
    },
  },
);

tabNavigator.path = '';

export default tabNavigator;
