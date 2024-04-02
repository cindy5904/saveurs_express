import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
  Button,
  Pressable
} from 'react-native';
import { Picker } from '@react-native-picker/picker';


const CommandDetail = ({ route }) => {
  const { command } = route.params;
  const HorizontalLine = () => {
    return <View style={styles.hr} />;
  };

  const prixTotal = command.menu.reduce(
    (total, menuItem) =>
      total + parseFloat(menuItem.prix.replace('€', '').replace(',', '.')),
    0,
  );

  // Fonction pour ouvrir Google Maps avec l'adresse spécifique
  const handleOpenMaps = (address) => {
    const formattedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

    Linking.openURL(url);
  };


  const [menuVisible, setMenuVisible] = useState(false);
  const etatsCommande = ['', 'Annulée', 'Retirée', 'Livrée', 'En retard'];
  const [pastilleColor, setPastilleColor] = useState('transparent');

  const etatColors = {
    Annulée: 'red',
    Retirée: 'blue',
    Livrée: 'green',
    'En retard': 'orange',
  };

  const [selectedEtatIndex, setSelectedEtatIndex] = useState(
    etatsCommande.indexOf(command.status),
  );

  const handleChangeEtatCommande = index => {
    setSelectedEtatIndex(index);

    const selectedEtat = etatsCommande[index];

    setPastilleColor(etatColors[selectedEtat] || 'transparent');
  };
  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.containerHeaderId}>
        <Text style={styles.containerHeaderIdText}>Numéro de commande: {command.id}</Text>
      </View>
      <Text style={styles.title}>Détails de la commande</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Statut:</Text>
        <View style={[styles.pastille, { backgroundColor: pastilleColor }]} />
      </View>
      <View style={styles.containerContent}>
        <View style={styles.container1}>
          <View style={styles.section}>
            <Text style={styles.textLabel}>N° de Commande:</Text>
            <Text style={styles.textValue}>{command.id}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.textLabel}>Date de commande:</Text>
            <Text style={styles.textValue}>{command.dateCommande}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContainer}>
            <View style={styles.section}>
              <Text style={styles.label}>Client:</Text>
              <Text style={styles.detail}>{command.nomClient}</Text>
            </View>
            <View style={styles.section}>
              
              <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${command.telephone}`)}
            style={styles.menuButton}>
            <Text style={styles.label}>Téléphone:</Text>
            <Text style={styles.detail}>{command.telephone}</Text>
          </TouchableOpacity>
              

            </View>
          </View>
          <HorizontalLine />
          <View style={styles.cardContainer}>
            <View style={styles.section}>
              <Text style={styles.label}>Prix:</Text>
              <Text style={styles.detail}>{prixTotal.toFixed(2)}€</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Quantité:</Text>
              <Text style={styles.detail}>{command.menu.length}</Text>
            </View>
          </View>
          <View style={styles.sectionPicker}>
            <Text style={styles.label}>État de la commande:</Text>
            <Picker
              selectedValue={etatsCommande[selectedEtatIndex]}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                handleChangeEtatCommande(itemIndex)
              }>
              {etatsCommande.map((etat, index) => (
                <Picker.Item style={styles.pickerItem} key={index} label={etat} value={etat} />
              ))}
            </Picker>
          </View>
          <TouchableOpacity
            onPress={toggleMenuVisibility}
            style={styles.menuButton}>
            <Text style={styles.menuButtonText}>Détails Menu</Text>
          </TouchableOpacity>
          <View style={styles.menuContainerCard}>
            {menuVisible &&
              command.menu &&
              command.menu.map((menuItem, index) => (
                <View key={index} style={styles.menuContainer}>
                  <Image
                    source={{ uri: menuItem.image }}
                    style={styles.menuImage}
                  />
                  <View style={styles.menuDetails}>
                    <Text style={styles.menuName}>{menuItem.nom}</Text>
                    <Text style={styles.menuPrice}>{menuItem.prix} €</Text>
                    <Text style={styles.menuDescription}>
                      {menuItem.description}
                    </Text>
                  </View>
                </View>
              ))}
          </View>
        </View>
        <TouchableOpacity style={styles.link} onPress={() => handleOpenMaps(command.adresse)}>
          <Text style={styles.textLink}>
            Accèder à l'adresse de livraison
          </Text>
        </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerHeaderId: {
    backgroundColor: '#1f2041',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerHeaderIdText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,

  },


  containerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#ffeecc',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    gap: 40,
  },
  card: {
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#ffeecc',
    marginTop: 10,
    width: 330,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  statusContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 64,
  },
  statusLabel: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'column',
    marginBottom: 10,
    alignItems: 'center'
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  detail: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    width: 200,
    marginTop: 40,
    backgroundColor: '#1f2041'
  },
  textLink: {
    color: '#fff',
    textAlign: 'center',
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  menuContainerCard: {

  },
  menuContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 10,
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

  sectionPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerItem: {
    fontSize: 15,
    backgroundColor: '#ffeecc',

  },
  etatItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 5,
  },

  picker: {
    height: 40,
    width: '50%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ffeecc',
    borderRadius: 5,
  },
  pastille: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ccccc',
  },
});

export default CommandDetail;
