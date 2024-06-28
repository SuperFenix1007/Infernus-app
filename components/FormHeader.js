import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FormHeader = ({ title, subtitle, showImage = false }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      {showImage && (
        <Image 
          source={require('../assets/infernus.png')} 
          style={styles.image} 
        />
      )}
      <Text style={styles.subText}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
    color: '#fff',
    textAlign: 'center',
  },
});

export default FormHeader;
