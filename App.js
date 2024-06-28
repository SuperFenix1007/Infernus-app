import 'react-native-gesture-handler';  // Asegúrate de que esta importación esté al principio
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para manejar la sesión
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import RecoverPasswordScreen from './screens/RecoverPasswordScreen';
import SetNewPasswordScreen from './screens/SetNewPasswordScreen';
import TiendaScreen from './screens/TiendaScreen';   
import DashboardScreen from './screens/DashboardScreen';
import PerfilScreen from './screens/PerfilScreen';
import SidebarMenu from './components/SidebarMenu';
import ProductosTienda from './screens/ProductosTienda';
import InformacionReseñaScreen from './screens/InformacionReseñaScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#FF6F61',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require('./assets/menu.png')} style={{ marginLeft: 10, width: 24, height: 24 }} />
        </TouchableOpacity>
      ),
    })}
  >
    <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
    <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ title: 'Crear Cuenta' }} />
    <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} options={{ title: 'Recuperar Contraseña' }} />
    <Stack.Screen name="SetNewPassword" component={SetNewPasswordScreen} options={{ title: 'Establecer Nueva Contraseña' }} />
  </Stack.Navigator>
);
const AppStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Dashboard"
    screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#FF6F61',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require('./assets/menu.png')} style={{ marginLeft: 10, width: 24, height: 24 }} />
        </TouchableOpacity>
      ),
    })}
  >
    <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Inicio' }} />
    <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil' }} />
    <Stack.Screen name="Tienda" component={TiendaScreen} options={{ title: 'Tienda' }} />
    <Stack.Screen name="ProductosTienda" component={ProductosTienda} options={{ title: 'Productos Tienda' }} />
    <Stack.Screen name="InformacionReseñaScreen" component={InformacionReseñaScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <SidebarMenu {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
        {isLoggedIn ? (
          <>
            <Drawer.Screen name="AppStack" component={AppStackNavigator} />
            <Drawer.Screen name="Tienda" component={TiendaScreen} options={{ title: 'Tienda' }} />
          </>
        ) : (
          <Drawer.Screen name="AuthStack" component={AuthStackNavigator} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;