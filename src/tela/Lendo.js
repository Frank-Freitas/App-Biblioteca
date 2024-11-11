import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Lendo({ livros, removerLivro }) {
  const renderizarItemLivro = ({ item }) => (
    <View style={estilos.containerItem}>
      <Image 
        source={{ uri: item.urlImagem }} 
        style={estilos.imagemLivro} 
      />
      <Text style={estilos.titulo}>{item.titulo}</Text>
      <Text style={estilos.autor}>{item.autor}</Text>
      <TouchableOpacity 
        style={estilos.botaoRemover} 
        onPress={() => removerLivro(item, 'Lendo')}
      >
        <Text style={estilos.textoBotaoRemover}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={estilos.container}>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={renderizarItemLivro}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F1FF',
    padding: 20,
  },
  containerItem: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  imagemLivro: {
    width: 100,
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  autor: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
  },
  botaoRemover: {
    backgroundColor: '#FF4D4D', 
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  textoBotaoRemover: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
