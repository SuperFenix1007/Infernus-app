import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SidebarMenu = ({ navigation, isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    setIsLoggedIn(false);
    navigation.navigate('AuthStack');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('AppStack', { screen: 'Dashboard' })}>
            <Text style={styles.menuItem}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.menuItem}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('AuthStack', { screen: 'Login' })}>
            <Text style={styles.menuItem}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AuthStack', { screen: 'CreateAccount' })}>
            <Text style={styles.menuItem}>Crear Cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AuthStack', { screen: 'RecoverPassword' })}>
            <Text style={styles.menuItem}>Recuperar Contraseña</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC8080',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
    color: '#fff',
  },
});

export default SidebarMenu;
