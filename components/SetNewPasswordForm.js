import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from './InputField';
import FormButton from './FormButton';
import FormHeader from './FormHeader';

const SetNewPasswordForm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FormHeader 
        title="Recuperación de contraseña" 
        subtitle="" 
        showImage={true}
      />
      <Text style={styles.instructionText}>Ingrese su nueva contraseña</Text>
      <InputField 
        placeholder="Nueva contraseña" 
        secureTextEntry 
      />
      <Text style={styles.instructionText}>Repita su nueva contraseña</Text>
      <InputField 
        placeholder="Repita su nueva contraseña" 
        secureTextEntry 
      />
      <FormButton
        title="Restaurar"
        onPress={() => console.log('Restaurar contraseña presionado')}
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
  instructionText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  loginText: {
    marginTop: 20,
    color: '#fff',
  },
});

export default SetNewPasswordForm;
