// LIBS
import React from 'react';

// React Native Navigation
import {NavigationContainer} from '@react-navigation/native';

// React Native Stack
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Redux Store
import {Provider} from 'react-redux';

// Store
import store from './src/stores';

// Screens
import {screens} from './src/constants';

import {Welcome, CourseDetails} from './src/screens';

// Tabs
import Tabs from './src/navigation/tabs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Welcome'}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="CourseDetails" component={CourseDetails} />
          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
