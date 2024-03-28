import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CommandCard from './CommandCard';
import { useNavigation } from '@react-navigation/native';
import data from '../data/commande.json';

const CommandList = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('CommandDetail', { command: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CommandCard command={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 40,
  },
});

export default CommandList;
