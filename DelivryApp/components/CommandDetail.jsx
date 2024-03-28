import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

const CommandDetail = ({ route }) => {
  // Récupérez la commande à partir des paramètres de navigation
  const { command } = route.params;

  // Calculer la somme des prix des menus
  const prixTotal = command.menu.reduce((total, menuItem) => total + parseFloat(menuItem.prix.replace('€', '').replace(',', '.')), 0);

  // Fonction pour ouvrir Google Maps avec l'adresse spécifique
  const handleOpenMaps = (address) => {
    const formattedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Détails de la commande</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Nom de Client:</Text>
          <Text style={styles.detail}>{command.nomClient}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Numéro de Commande:</Text>
          <Text style={styles.detail}>{command.id}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Date de commande:</Text>
          <Text style={styles.detail}>{command.dateCommande}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Statut:</Text>
          <Text style={styles.detail}>{command.status}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Prix:</Text>
          <Text style={styles.detail}>{prixTotal.toFixed(2)}€</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Adresse:</Text>
          <TouchableOpacity onPress={() => handleOpenMaps(command.adresse)}>
            <Text style={[styles.detail, styles.link]}>{command.adresse}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Quantité:</Text>
          <Text style={styles.detail}>{command.menu.length}</Text>
        </View>
        {command.menu && command.menu.map((menuItem, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.label}>Menu:</Text>
            <View style={styles.menuContainer}>
              <Image source={{ uri: menuItem.image }} style={styles.menuImage} />
              <View style={styles.menuDetails}>
                <Text style={styles.menuName}>{menuItem.nom}</Text>
                <Text style={styles.menuPrice}>{menuItem.prix}</Text>
                <Text style={styles.menuDescription}>{menuItem.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 20,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  detail: {
    fontSize: 18,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 5,
  },
  menuDetails: {
    flex: 1,
  },
  menuName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuPrice: {
    fontSize: 14,
    color: '#888',
  },
  menuDescription: {
    fontSize: 14,
  },
});

export default CommandDetail;