import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BarraNavegacaoInferior({ state, navigation }) {
  return (
    <View style={estilos.barraDeAbas}>
      {state.routes.map((rota, indice) => {
        const estaNaAba = state.index === indice;

        const aoPressionar = () => {
          const evento = navigation.emit({
            type: 'tabPress',
            target: rota.key,
          });

          if (!estaNaAba && !evento.defaultPrevented) {
            navigation.navigate(rota.name);
          }
        };

        return (
          <TouchableOpacity key={indice} onPress={aoPressionar} style={estilos.itemDaAba}>
            <Text style={estaNaAba ? estilos.abaAtiva : estilos.abaInativa}>
              {rota.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const estilos = StyleSheet.create({
  barraDeAbas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  itemDaAba: {
    padding: 10,
  },
  abaAtiva: {
    fontWeight: 'bold',
    color: '#000',
  },
  abaInativa: {
    color: '#888',
  },
});
