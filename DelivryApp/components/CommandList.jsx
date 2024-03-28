import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CommandCard from './CommandCard';
import data from '../data/commande.json';

const CommandList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CommandCard
            command={item}
            onPress={() => navigation.navigate('CommandDetail', { command: item })}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
});

export default CommandList;
