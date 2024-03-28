import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CommandCard = ({ command, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.date}>{command.id}</Text>
        <Text style={styles.date}>{command.dateCommande}</Text>
        <Text style={styles.status}>{command.status}</Text>
        <Text style={styles.price}>{command.prix}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CommandCard;
