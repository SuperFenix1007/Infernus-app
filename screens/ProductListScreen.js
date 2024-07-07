import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductListComponent from '../components/ProductListComponent';

const ProductListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ProductListComponent navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC8080',
  },
});

export default ProductListScreen;
