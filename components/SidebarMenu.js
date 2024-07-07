import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Asegúrate de importar AsyncStorage

const SidebarMenu = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    setIsLoggedIn(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {isLoggedIn && (
          <>
            <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('DashboardScreen')}>
              <Text style={styles.menuItemText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('Perfil')}>
              <Text style={styles.menuItemText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('CarritoScreen')}>
              <Text style={styles.menuItemText}>Carrito</Text>
            </TouchableOpacity>   
          </>
        )}
      </DrawerContentScrollView>
      {isLoggedIn && (
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Text style={styles.menuItemText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    padding: 20,
  },
  menuItemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default SidebarMenu;
