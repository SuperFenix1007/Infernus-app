import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const addToCart = () => {
    
    alert(`${product.name} añadido al carrito`);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productDescription}>Descripción del producto...</Text>
      <Button title="Agregar al Carrito" onPress={addToCart} color="#ff6f61" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC8080',
    alignItems: 'center',
    padding: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#ff6f61',
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;
