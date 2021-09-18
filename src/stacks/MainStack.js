import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload/Preload';
import SingIn from '../screens/SingIn/SingIn';
import SingUp from '../screens/SingUp/SingUp';
import MainTab from './MainTab';
import Barber from '../screens/Barber/Barber';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SingIn" component={SingIn} />
    <Stack.Screen name="SingUp" component={SingUp} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="Barber" component={Barber} />
  </Stack.Navigator>
);
