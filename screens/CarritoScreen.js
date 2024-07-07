import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { CartContext } from '../components/CartContext';

const CarritoScreen = ({ navigation }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    clearCart();
    alert('Compra realizada con éxito');
    navigation.navigate('Tienda');
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.imagen} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.nombre}</Text>
              <Text>Cantidad: {item.quantity}</Text>
              <Text>Precio: ${item.precio}</Text>
              <Text>Total: ${item.precio * item.quantity}</Text>
            </View>
            <Button title="Eliminar" onPress={() => handleRemoveItem(item.id)} />
          </View>
        )}
      />
      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>Total: ${getTotal()}</Text>
          <Button title="Checkout" onPress={handleCheckout} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CarritoScreen;
