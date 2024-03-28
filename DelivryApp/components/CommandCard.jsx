import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CommandCard = ({ command, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(command)} style={styles.card}>
      <View style={styles.content}>
        <View style={styles.upContent}>
          <Text style={styles.date}>Numéro de commande: {command.id}</Text>
          <Text style={styles.date}>Date de commande: {command.dateCommande}</Text>
          <Text style={styles.status}>Statut: {command.status}</Text>
        </View>
        <View style={styles.downContent}>
          <Text style={styles.price}>Prix: {command.prix}</Text>
          <Text style={styles.quantity}>Quantité: {command.menu.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#84B4FC',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 3, // Pour l'ombre
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  upContent: {
    flex: 1,
  },
  downContent: {
    flex: 1,
    alignItems: 'flex-end',
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
