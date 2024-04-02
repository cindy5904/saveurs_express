import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Button, Text, Image, TouchableOpacity } from 'react-native';
import CommandCard from './CommandCard';
import { useNavigation } from '@react-navigation/native';
import data from '../data/commande.json';
import header from '../assets/header-menu.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';

const CommandList = ({ route }) => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; 
  const [commands, setCommands] = useState([]);
  
  const [commandStatuses, setCommandStatuses] = useState([]);

  useEffect(() => {
    const statuses = commands.map(command => command.status);
    setCommandStatuses(statuses);
  }, [commands]);

  const updateCommandStatus = (updatedCommand) => {
    setCommands(prevCommands => {
      return prevCommands.map(command => {
        if (command.id === updatedCommand.id) {
          return { ...command, status: updatedCommand.status };
        }
        return command;
      });
    });
  };

  useEffect(() => {
    console.log('commands:', commands);
  }, [commands]);

  const handlePresses = (item) => {
    navigation.navigate('LivreurAccepteCommande', { command: item});
  };
  useEffect(() => {
    if (route.params && route.params.updatedCommand) {
      updateCommandStatus(route.params.updatedCommand);
    }
  }, [route.params]);
  
  

  const getItemsForPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeaderImg}>
      <Image style={styles.headerImg} source={header}/>
      <View style={styles.overlay} />
      <Text style={styles.overlayText}>Saveurs Express</Text>
      </View>
      <View style={styles.containerTextHeader}>
      <Text style={styles.textHeader}>Livraison</Text>

      </View>
      <FlatList
        data={getItemsForPage()}
        renderItem={({ item }) => (
          <CommandCard command={item} onPress={() => handlePresses(item)}  updateCommandStatus={updateCommandStatus}/>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.pagination}>
      <TouchableOpacity onPress={prevPage} disabled={currentPage === 1}>
        <Icon name="angle-left" size={28} color={currentPage === 1 ? 'grey' : 'black'} />
      </TouchableOpacity>
      <Text style={styles.pageNumber}>{currentPage}</Text>
      <TouchableOpacity onPress={nextPage} disabled={currentPage * itemsPerPage >= data.length}>
        <Icon name="angle-right" size={28} color={currentPage * itemsPerPage >= data.length ? 'grey' : 'black'} />
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerHeaderImg: {
    position: 'relative',
  },
  headerImg: {
    width: '100%',
    height: 250,
    resizeMode:"cover"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayText: {
    position: 'absolute',
    top: '60%', 
    left: '42%',
    transform: [{ translateX: -50 }, { translateY: -50 }], 
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  containerTextHeader: {
    width: 240,
    backgroundColor:'#ffeecc',
    paddingVertical: 10,
    marginTop: -17,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textHeader: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  pagination: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
});

export default CommandList;
