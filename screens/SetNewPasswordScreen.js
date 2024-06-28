import React from 'react';
import { View, StyleSheet } from 'react-native';
import SetNewPasswordForm from '../components/SetNewPasswordForm';

const SetNewPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SetNewPasswordForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SetNewPasswordScreen;
