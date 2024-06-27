import React from 'react';
import { View, StyleSheet } from 'react-native';
import CreateAccountForm from '../components/CreateAccountForm';

const CreateAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CreateAccountForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateAccountScreen;
