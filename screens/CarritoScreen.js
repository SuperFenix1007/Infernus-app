import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>Precio: ${item.price}</Text>
            <Button title="Eliminar" onPress={() => handleRemoveItem(item.id)} />
          </View>
        )}
      />
      {cartItems.length > 0 && (
        <Button title="Checkout" onPress={handleCheckout} />
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
});

export default CarritoScreen;
