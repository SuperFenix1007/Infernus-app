import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from './InputField';
import FormButton from './FormButton';
import FormHeader from './FormHeader';

const RecoverPasswordForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FormHeader 
        title="Recuperación de contraseña" 
        subtitle="Ingrese su correo electrónico para recibir el código de recuperación de cuenta"
      />
      <InputField placeholder="Correo Electrónico" keyboardType="email-address" />
      <FormButton
        title="Enviar"
        onPress={() => console.log('Enviar correo electrónico presionado')}
      />
      <FormHeader 
        subtitle="Ingrese el código de recuperación recibido en su correo"
      />
      <InputField placeholder="Código de recuperación" />
      <FormButton
        title="Enviar"
        onPress={() => console.log('Enviar código de recuperación presionado')}
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
  loginText: {
    marginTop: 20,
    color: '#fff',
  },
});

export default RecoverPasswordForm;
