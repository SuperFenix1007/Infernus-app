import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Asegúrate de que esta importación esté correcta

const PerfilComponent = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          const existingUsers = await AsyncStorage.getItem('users');
          const users = existingUsers ? JSON.parse(existingUsers) : [];
          const user = users.find(u => u.email === email);

          if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setPassword(user.password);
          }
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
      }
    };

    loadUserData();
  }, []);

  const handleUpdateProfile = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    try {
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];
      const userIndex = users.findIndex(u => u.email === email);

      if (userIndex !== -1) {
        users[userIndex] = {
          firstName,
          lastName,
          email,
          password
        };
        await AsyncStorage.setItem('users', JSON.stringify(users));
        Alert.alert('Éxito', 'Perfil actualizado con éxito.');
      }
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      Alert.alert('Error', 'Hubo un problema al actualizar el perfil.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Primer nombre"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={lastName}
        onChangeText={setLastName}
      />
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
      <Button
        title="Actualizar Perfil"
        onPress={handleUpdateProfile}
        color="#ff6f61"
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default PerfilComponent;
