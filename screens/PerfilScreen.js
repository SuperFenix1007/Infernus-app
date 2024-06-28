// screens/PerfilScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PerfilComponent from '../components/PerfilComponent';

const PerfilScreen = ({ navigation }) => {
  // Información del perfil del usuario
  const userProfile = {
    nombre: 'César López',
    correo: '20190156@gmail.com',
    fechaRegistro: '01/02/2024',
  };

  return (
    <View style={styles.container}>
      <PerfilComponent 
        nombre={userProfile.nombre} 
        correo={userProfile.correo} 
        fechaRegistro={userProfile.fechaRegistro} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F61',
  },
});

export default PerfilScreen;
