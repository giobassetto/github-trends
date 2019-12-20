import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import TabBarIcon from './components/TabBarIcon';
import TrendingsScreen from './screens/TrendingsScreen';
import StarsScreen from './screens/StarsScreen';


const TrendingsStack = createStackNavigator(
  {
    Tendings: TrendingsScreen,
  },
  {
    defaultNavigationOptions: {
      backgroundColor: '#f5b6da'
    },
  }
);

TrendingsStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: '#6002ee'
    }
  },
  tabBarLabel: 'Trendings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="fire"
    />
  ),
};

const StarsStack = createStackNavigator(
  {
    Stars: StarsScreen,
  },

);

StarsStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: '#6002ee'
    }
  },
  activeTintColor: '#fff',
  tabBarLabel: 'Stars',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="star" />
  ),
};

const tabNavigator = createBottomTabNavigator({
  TrendingsStack,
  StarsStack,
},
{
  backgroundColor: '#9965f4'
}
);

export default createAppContainer(createSwitchNavigator({
  Main: tabNavigator
}));
