import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Asegúrate de que esta importación esté correcta

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    try {
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        await AsyncStorage.setItem('userToken', 'abc'); 
        navigation.navigate('./screens/DashboardScreen.js');
      } else {
        Alert.alert('Error', 'Correo electrónico o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Alert.alert('Error', 'Hubo un problema al iniciar sesión.');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/samsulek.png')}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <Text style={styles.subText}>Ingresa tus datos</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text 
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('RecoverPassword')}
      >
        ¿Olvidaste tu contraseña?
      </Text>
      <Button
        title="Iniciar Sesión"
        onPress={handleLogin}
        color="#ff6f61"
      />
      <Text 
        style={styles.createAccount}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        ¿No tienes cuenta? Crear una nueva cuenta
      </Text>
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
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#fff',
  },
  createAccount: {
    marginTop: 20,
    color: '#fff',
  },
});

export default LoginForm;
