// components/PerfilComponent.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PerfilComponent = ({ nombre, correo, fechaRegistro }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/profile.png')}  
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>Nombre: {nombre}</Text>
      <Text style={styles.emailText}>Correo: {correo}</Text>
      <Text style={styles.dateText}>Fecha de registro: {fechaRegistro}</Text>
      <Image 
        source={require('../assets/infernus.png')}  
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC8080',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,  
    height: 100,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emailText: {
    fontSize: 16,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default PerfilComponent;
