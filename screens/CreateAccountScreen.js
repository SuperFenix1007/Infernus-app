import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Crear Cuenta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6f61',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CreateAccountScreen;
