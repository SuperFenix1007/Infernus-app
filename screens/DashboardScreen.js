import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          "Infernus Gym Shop es tu destino para encontrar todo lo necesario para potenciar tu rutina de entrenamiento. Descubre nuestra amplia selección que incluye nutrientes, pesas, ropa deportiva, suplementos nutricionales y accesorios así como equipamiento para entrenar en casa. ¡Nuestros productos de alta calidad están diseñados para mejorar tu rendimiento y ayudarte a alcanzar tus metas fitness. Explora el catálogo y lleva tu entrenamiento al siguiente nivel con Infernus Gym Shop!"
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ofertas</Text>
        <TouchableOpacity onPress={() => console.log('Ver todas presionado')}>
          <Text style={styles.viewAll}>Ver todas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.offers}>
        <View style={styles.offerCard}>
          <Image source={require('../assets/offer1.png')} style={styles.offerImage} />
          <Text style={styles.offerText}>Obtén 50% de descuento en proteínas seleccionadas</Text>
          <Text style={styles.offerPrice}>Solo $29.99</Text>
        </View>
        <View style={styles.offerCard}>
          <Image source={require('../assets/offer2.png')} style={styles.offerImage} />
          <Text style={styles.offerText}>Solo hoy: 20% de descuento en nuestras nuevas camisetas</Text>
          <Text style={styles.offerPrice}>Solo $14.99</Text>
        </View>
        <View style={styles.offerCard}>
          <Image source={require('../assets/offer3.png')} style={styles.offerImage} />
          <Text style={styles.offerText}>Obtén una creatina al 50% de descuento al comprar una proteína</Text>
          <Text style={styles.offerPrice}>Desde $24.99</Text>
        </View>
        <View style={styles.offerCard}>
          <Image source={require('../assets/offer4.png')} style={styles.offerImage} />
          <Text style={styles.offerText}>Solo hoy: 20% de descuento en nuestra ropa deportiva nueva</Text>
          <Text style={styles.offerPrice}>Solo $19.99</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC8080',
  },
  header: {
    padding: 20,
    backgroundColor: '#FF6F61',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#FF6F61',
  },
  offers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  offerCard: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  offerImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  offerText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  offerPrice: {
    color: '#FF6F61',
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
