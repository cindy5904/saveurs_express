import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import maps from '../assets/maps.png'
import iconmaps from '../assets/iconmaps.png'
import { useNavigation } from '@react-navigation/native';



export default function LivreurAccepteCommande({ route }) {
    const { command } = route.params;
    const navigation = useNavigation();
    const [status, setStatus] = useState('En attente'); // État initial

    const handleRefuser = () => {
        setStatus('Refusée'); // Mettre à jour le statut de la commande
        console.log('refusée');
        navigation.navigate('CommandList', { updatedCommand: { id: command.id, status: 'Refusée' } });
      };

    
    console.log('Command:', command);

    const handleAccepter = () => {
      navigation.navigate('CommandDetail', { command });
  };

  
  
    return (
      <View style={styles.container}>
        <View style={styles.containerHeaderId}>
        <Text style={styles.containerHeaderIdText}>Numéro de commande: {command.id}</Text>
      </View>
        <Image style={styles.img} source={maps}/>
        <View style={styles.adress}>
        <Image style={styles.imgmaps} source={iconmaps}/>
        <Text style={styles.textimg}>{command.adresse}</Text>      
       </View>
       <View style={styles.buttonContainer}>
       <Pressable style={[styles.button, styles.rejectButton]} onPress={handleRefuser}>
                    <Text style={styles.buttonText}>Refuser</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.acceptButton]} onPress={handleAccepter}>
                    <Text style={styles.buttonText}>Accepter</Text>
                </Pressable>
                
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      containerHeaderId: {
        backgroundColor: '#1f2041',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    
      },
      containerHeaderIdText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
    
      },
      img: {
        width: '100%',
        height: 500,
      },
      adress: {
        marginTop: 30,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        gap: 15,
      },
      imgmaps: {
        width: 15,
        height: 15,
        resizeMode: 'contain', 
      },
      textimg: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 90, 
        gap: 25,
      },
      button: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      acceptButton: {
        backgroundColor: 'blue', 
      },
      rejectButton: {
        backgroundColor: 'red', 
      },
      buttonText: {
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold',
      },

    })