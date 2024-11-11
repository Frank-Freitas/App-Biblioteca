import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { fetchLivros } from '../api/apiLivros';

export default function Buscar({ adicionarLivro }) {
  const [query, setQuery] = useState('');
  const [livros, setLivros] = useState([]);

  const buscarLivros = async () => {
    const livrosEncontrados = await fetchLivros(query);
    setLivros(livrosEncontrados);
  };

  const renderLivroItem = ({ item }) => {
    const title = item.title || 'Título desconhecido';
    const authors = item.author || 'Autor desconhecido';
    const imageUrl = item.imageUrl || 'https://via.placeholder.com/200x300?text=Sem+imagem';

    return (
      <View style={styles.itemContainer}>
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.bookImage} 
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{authors}</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => adicionarLivro(item, 'Lendo')}
          >
            <Text style={styles.buttonText}>Lendo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => adicionarLivro(item, 'ParaLer')}
          >
            <Text style={styles.buttonText}>Para Ler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => adicionarLivro(item, 'Favoritos')}
          >
            <Text style={styles.buttonText}>Favoritos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o título do livro"
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.searchButton} onPress={buscarLivros}>
        <Text style={styles.searchButtonText}>Buscar</Text>
      </TouchableOpacity>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={renderLivroItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'E9F1FF', 
  },
  input: {
    height: 50,
    borderColor: '#B3B3B3',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: '#FFF',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchButton: {
    backgroundColor: '#FF4D4D', // Azul moderno
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookImage: {
    width: 180, // Capa maior
    height: 270, // Capa maior
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
    color: '#333',
  },
  author: {
    color: '#777',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 4,
    paddingHorizontal: 11,
    borderRadius: 25,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 11,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
