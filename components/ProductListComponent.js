import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProductListComponent = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API o cargar datos de productos
    const sampleProducts = [
      { id: '1', name: 'Producto 1', price: 10, image: require('../assets/image64.png') },
      { id: '2', name: 'Producto 2', price: 20, image: require('../assets/image44.png') },
      { id: '3', name: 'Producto 3', price: 30, image: require('../assets/image47.png') },
      // Agrega más productos según sea necesario
    ];
    setProducts(sampleProducts);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC8080',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  productList: {
    alignItems: 'center',
  },
  productItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#ff6f61',
  },
});

export default ProductListComponent;
