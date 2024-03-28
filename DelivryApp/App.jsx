import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CommandList from './components/CommandList';
import CommandCard from './components/CommandCard';
import CommandDetail from './components/CommandDetail';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CommandList"
          component={CommandList}
          options={{ title: 'Commandes' }}
        />
        {/* <Stack.Screen
          name="CommandDetail"
          component={CommandCard}
          options={{ title: 'Details Commande' }}
        /> */}
        <Stack.Screen
          name="CommandDetail"
          component={CommandDetail}
          options={{ title: 'Details Commande' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
