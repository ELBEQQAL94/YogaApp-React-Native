// Libs
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Constants
import {COLORS, tabs} from '../constants';

// Core Components
import {TabButton} from '../components';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: COLORS.primary,
            borderTopColor: 'transparent',
            height: 100,
          },
          null,
        ],
      }}>
      {tabs &&
        tabs?.map(tab => (
          <Tab.Screen
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({focused}) => (
                <TabButton icon={tab.icon} isFocus={focused} />
              ),
            }}
          />
        ))}
    </Tab.Navigator>
  );
};

export default Tabs;
