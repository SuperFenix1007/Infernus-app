import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecoverPasswordForm from '../components/RecoverPasswordForm';

const RecoverPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <RecoverPasswordForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RecoverPasswordScreen;
