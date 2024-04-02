import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CommandList from './components/CommandList';
import CommandCard from './components/CommandCard';
import CommandDetail from './components/CommandDetail';
import LivreurAccepteCommande from './components/LivreurAccepteCommande';

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
        <Stack.Screen
          name="LivreurAccepteCommande"
          component={LivreurAccepteCommande}
          options={{ title: 'Accepter la commande' }}
        />
        <Stack.Screen
          name="CommandDetail"
          component={CommandDetail}
          options={{ title: 'commande détails' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
