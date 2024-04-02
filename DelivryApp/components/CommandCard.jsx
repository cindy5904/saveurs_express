import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CommandCard = ({ command, onPress }) => {
  
  return (
    <TouchableOpacity onPress={() => onPress(command)} style={styles.card}>
      <View style={styles.content}>
        <View style={styles.upContent}>
          <Text style={styles.date}>Numéro de commande: {command.id}</Text>
        </View>
        <View style={styles.downContent}>
        <Text style={styles.quantity}>{command.menu.length} articles</Text>

          <Text style={styles.price}>{command.prix} €</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
     marginTop: 15,
  },
  content: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  upContent: {
    backgroundColor: '#84B4FC',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 3,
  },
  downContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#cde1fe'
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    color: '#666',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CommandCard;
