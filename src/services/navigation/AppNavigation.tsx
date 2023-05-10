import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabs} from './BottomTab';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Tab'} component={BottomTabs} />
    </Stack.Navigator>
  );
}
