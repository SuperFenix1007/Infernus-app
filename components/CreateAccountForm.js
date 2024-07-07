import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Asegúrate de que esta importación esté correcta

const CreateAccountForm = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(password);
  };

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Correo electrónico inválido.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres y contener al menos un número.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    
    const user = {
      firstName,
      lastName,
      email,
      password
    };

    try {
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];
      users.push(user);
      await AsyncStorage.setItem('users', JSON.stringify(users));
      Alert.alert('Éxito', 'Usuario registrado con éxito.');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
      Alert.alert('Error', 'Hubo un problema al registrar el usuario.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <Image 
        source={require('../assets/infernus.png')}
        style={styles.image}
      />
      <Text style={styles.subText}>Ingresa tus datos</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Vuelve a repetir la contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button
        title="Registrarse"
        onPress={handleRegister}
        color="#ff6f61"
      />
      <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
        ¿Ya tienes cuenta? iniciar Sesión
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#fff',
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
  loginText: {
    marginTop: 20,
    color: '#fff',
  },
});

export default CreateAccountForm;
