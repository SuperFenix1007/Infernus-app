import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const productos = [
  {
    id: 1,
    imagen: require('../assets/image48.png'),
    descripcion: 'Mancuerna Gym Power Rubber Hexagon 4KG\nCon las Mancuernas Gym Power podrás tonificar tus músculos y aumentar tu resistencia. Estas pesas de entrenamiento son de metal y te permiten un mejor agarre para evitar deslizamientos. Combínalas con tu rutina de ejercicios favorita.',
    categoria: 'Mancuernas',
  },
  {
    id: 2,
    imagen: require('../assets/image50.png'),
    descripcion: 'Las conocidas como pesas, en el argot del fitness, mancuernas, son el elemento principal para entrenar en casa con resultados, explica Alcázar: “Es el material más versátil y el primero en el que invertir. Pídele a tu más ligero o moderado hasta lo más pesado, según las opciones para compra.',
    categoria: 'Mancuernas',
  },
  {
    id: 3,
    imagen: require('../assets/image64.png'),
    descripcion: 'La marca Titanium Strength cubre todas las necesidades con este set de mancuernas + soporte horizontal, de almacenamiento para mancuernas ordenadas. Se trata de un set de 10 pares de mancuernas ergonómicas que van desde los 2,5 kg hasta los 25 kg, así que son ideales para usuarios de poco nivel y para usuarios avanzados.',
    categoria: 'Mancuernas',
  },
  {
    id: 4,
    imagen: require('../assets/rectangle37.png'),
    descripcion: 'Las mancuernas de peso fijo son herramientas de entrenamiento versátiles y eficaces diseñadas para fortalecer y tonificar los músculos de todo el cuerpo.',
    categoria: 'Mancuernas',
  },
];

const ProductosTienda = ({ route, navigation }) => {
  const { category } = route.params;

  const productosFiltrados = productos.filter(producto => producto.categoria === category);

  const handlePress = (id) => {
    // Aquí puedes manejar la navegación o cualquier otra acción al presionar "Ver producto"
    console.log(`Producto ${id} presionado`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {productosFiltrados.map((producto) => (
        <View key={producto.id} style={styles.producto}>
          <Image source={producto.imagen} style={styles.imagen} />
          <Text style={styles.descripcion}>{producto.descripcion}</Text>
          <TouchableOpacity style={styles.boton} onPress={() => handlePress(producto.id)}>
            <Text style={styles.botonTexto}>Ver producto</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Image source={require('../assets/gym_infernus_icon.png')} style={styles.logo} />
      <View style={styles.paginacion}>
        <TouchableOpacity style={styles.paginacionBoton}><Text style={styles.paginacionTexto}>Previous</Text></TouchableOpacity>
        <TouchableOpacity style={styles.paginacionBoton}><Text style={styles.paginacionTexto}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.paginacionBoton}><Text style={styles.paginacionTexto}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.paginacionBoton}><Text style={styles.paginacionTexto}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.paginacionBoton}><Text style={styles.paginacionTexto}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.paginacionBoton}><Text style={styles.paginacionTexto}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.paginacionBoton}><Text style={styles.paginacionTexto}>Next</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
  },
  producto: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  descripcion: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#00aced',
    padding: 10,
    borderRadius: 5,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  paginacion: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  paginacionBoton: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#00aced',
    borderRadius: 5,
  },
  paginacionTexto: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ProductosTienda;
