import React from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';

const CreateAccountForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <Image 
        source={require('../assets/infernus.png')} // Asegúrate de que esta ruta sea correcta
        style={styles.image} 
      />
      <Text style={styles.subText}>Ingresa tus datos</Text>
      <TextInput
        style={styles.input}
        placeholder="Primer nombre"
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Vuelve a repetir la contraseña"
        secureTextEntry
      />
      <Button
        title="Registrarse"
        onPress={() => console.log('Registrarse presionado')}
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
    width: 100, // Ajusta el tamaño de la imagen según sea necesario
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
