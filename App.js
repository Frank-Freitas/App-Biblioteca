import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Buscar from './src/tela/Buscar';
import Lendo from './src/tela/Lendo';
import ParaLer from './src/tela/ParaLer';
import Favoritos from './src/tela/Favoritos';
import BarraNavegacao from './src/componente/BarraNavegacaoInferior';

const Tab = createBottomTabNavigator();

export default function App() {
  const [livrosLendo, setLivrosLendo] = useState([]);
  const [livrosParaLer, setLivrosParaLer] = useState([]);
  const [livrosFavoritos, setLivrosFavoritos] = useState([]);
  
  const adicionarLivro = (livro, categoria) => {
    switch(categoria) {
      case 'Lendo':
        setLivrosLendo(livrosLendo.concat(livro));
        break;
      case 'ParaLer':
        setLivrosParaLer(livrosParaLer.concat(livro));
        break;
      case 'Favoritos':
        setLivrosFavoritos(livrosFavoritos.concat(livro));  
        break;
    }
  };

  const removerLivro = (livro, categoria) => {
    let novosLivros; // Variável genérica para armazenar os novos livros após a remoção

    switch(categoria) {
      case 'Lendo':
        novosLivros = [];
        livrosLendo.forEach(l => {
          if (l.id !== livro.id) {
            novosLivros.push(l);
          }
        });
        setLivrosLendo(novosLivros);
        break;
      case 'ParaLer':
        novosLivros = [];
        livrosParaLer.forEach(l => {
          if (l.id !== livro.id) {
            novosLivros.push(l);
          }
        });
        setLivrosParaLer(novosLivros);
        break;
      case 'Favoritos':
        novosLivros = [];
        livrosFavoritos.forEach(l => {
          if (l.id !== livro.id) {
            novosLivros.push(l);
          }
        });
        setLivrosFavoritos(novosLivros);
        break;
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => {
          return <BarraNavegacao 
            state={props.state} 
            descriptors={props.descriptors} 
            navigation={props.navigation} 
          />;
        }}
      >
        <Tab.Screen name="Buscar">
          {() => <Buscar adicionarLivro={adicionarLivro} />}
        </Tab.Screen>
        <Tab.Screen name="Favoritos">
          {() => <Favoritos livros={livrosFavoritos} removerLivro={removerLivro} />}
        </Tab.Screen>
        <Tab.Screen name="Lendo">
          {() => <Lendo livros={livrosLendo} removerLivro={removerLivro} />}
        </Tab.Screen>
        <Tab.Screen name="Para Ler">
          {() => <ParaLer livros={livrosParaLer} removerLivro={removerLivro} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
