import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CartContext } from '../components/CartContext';

const InformacionReseñaScreen = ({ route, navigation }) => {
  const { producto } = route.params;
  const [cantidad, setCantidad] = useState(1);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const { addToCart, cartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.id === producto.id);
    if (existingItem) {
      alert('El producto ya está en el carrito');
    } else {
      const productToAdd = { ...producto, quantity: cantidad };
      addToCart(productToAdd);
      alert('Producto agregado al carrito');
    }
  };

  const handleAddToWishlist = () => {
    console.log('Producto agregado a la lista de deseos');
  };

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <FontAwesome name="bars" size={24} color="#fff" style={{ marginRight: 20 }} />
      </View>
      <View style={styles.productContainer}>
        <Image source={producto.imagen} style={styles.image} />
        <Text style={styles.description}>{producto.descripcion}</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <FontAwesome name="cart-plus" size={24} color="#fff" />
          <Text style={styles.buttonText}>Agregar al Carrito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddToWishlist}>
          <FontAwesome name="heart" size={24} color="#fff" />
          <Text style={styles.buttonText}>Agregar a la Lista de Deseos</Text>
        </TouchableOpacity>
        <View style={styles.priceInfo}>
          <Text style={styles.priceLabel}>Precio:</Text>
          <Text style={styles.priceValue}>${producto.precio}</Text>
          <Text style={styles.priceLabel}>Cantidad disponible:</Text>
          <Text style={styles.priceValue}>{producto.disponibles}</Text>
          <Text style={styles.priceLabel}>Cantidad a comprar:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(cantidad)}
            onChangeText={(text) => setCantidad(Number(text))}
          />
          <Text style={styles.priceLabel}>Total:</Text>
          <Text style={styles.priceValue}>${producto.precio * cantidad}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitle}>VALORAR EL PRODUCTO:</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((value) => (
            <TouchableOpacity key={value} onPress={() => handleRating(value)}>
              <FontAwesome
                name={value <= rating ? 'star' : 'star-o'}
                size={32}
                color="#FFD700"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Image source={require('../assets/gym_infernus_icon.png')} style={styles.logo} />
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewTitle}>ESCRIBE UNA RESEÑA:</Text>
        <TextInput
          style={styles.reviewInput}
          multiline
          numberOfLines={4}
          placeholder="Escribe tu reseña aquí..."
          value={review}
          onChangeText={(text) => setReview(text)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffe6e6',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF6F61',
    padding: 10,
  },
  productContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00aced',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  priceInfo: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceValue: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    width: 50,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  ratingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  ratingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  reviewContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
});

export default InformacionReseñaScreen;
