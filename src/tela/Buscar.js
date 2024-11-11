import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { buscarLivros } from '../api/apiLivros';

export default function Buscar({ adicionarLivro }) {
  const [consulta, setConsulta] = useState('');
  const [livros, setLivros] = useState([]);

  const buscarLivrosAPI = async () => {
    const livrosEncontrados = await buscarLivros(consulta);
    setLivros(livrosEncontrados);
  };

  const renderizarItemLivro = ({ item }) => {
    const titulo = item.titulo || 'Título desconhecido';
    const autores = item.autor || 'Autor desconhecido';
    const urlImagem = item.urlImagem || 'https://via.placeholder.com/200x300?text=Sem+imagem';

    return (
      <View style={estilos.containerItem}>
        <Image 
          source={{ uri: urlImagem }} 
          style={estilos.imagemLivro} 
        />
        <Text style={estilos.titulo}>{titulo}</Text>
        <Text style={estilos.autor}>{autores}</Text>

        <View style={estilos.containerBotoes}>
          <TouchableOpacity
            style={estilos.botao}
            onPress={() => adicionarLivro(item, 'Lendo')}
          >
            <Text style={estilos.textoBotao}>Lendo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={estilos.botao}
            onPress={() => adicionarLivro(item, 'ParaLer')}
          >
            <Text style={estilos.textoBotao}>Para Ler</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={estilos.botao}
            onPress={() => adicionarLivro(item, 'Favoritos')}
          >
            <Text style={estilos.textoBotao}>Favoritos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.input}
        placeholder="Digite o título do livro"
        value={consulta}
        onChangeText={setConsulta}
      />
      <TouchableOpacity style={estilos.botaoBuscar} onPress={buscarLivrosAPI}>
        <Text style={estilos.textoBotaoBuscar}>Buscar</Text>
      </TouchableOpacity>
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
  botaoBuscar: {
    backgroundColor: '#FF4D4D', 
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  textoBotaoBuscar: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerItem: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagemLivro: {
    width: 180, 
    height: 270, 
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
    color: '#333',
  },
  autor: {
    color: '#777',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  botao: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 4,
    paddingHorizontal: 11,
    borderRadius: 25,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 11,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
