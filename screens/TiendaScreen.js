import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const TiendaScreen = ({ navigation }) => {

  const handlePress = (category) => {
    navigation.navigate('ProductosTienda', { category });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={styles.card}>
          <Image source={require('../assets/image44.png')} style={styles.image} />
          <Text style={styles.text}>Mancuernas</Text>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('Mancuernas')}>
            <Text style={styles.buttonText}>See more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/image45.png')} style={styles.image} />
          <Text style={styles.text}>Maquinas</Text>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('Maquinas')}>
            <Text style={styles.buttonText}>See more</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <Image source={require('../assets/image46.png')} style={styles.image} />
          <Text style={styles.text}>Suplementos</Text>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('Suplementos')}>
            <Text style={styles.buttonText}>See more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/image47.png')} style={styles.image} />
          <Text style={styles.text}>Ropa</Text>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('Ropa')}>
            <Text style={styles.buttonText}>See more</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image source={require('../assets/gym_infernus_icon.png')} style={styles.logo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffe6e6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00aced',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default TiendaScreen;
