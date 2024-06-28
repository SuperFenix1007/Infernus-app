import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const FormButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={title}
        onPress={onPress}
        color="#ff6f61"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  },
});

export default FormButton;
