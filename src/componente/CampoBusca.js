import React from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';

export default function CampoBusca({ consulta, setConsulta, aoBuscar }) {
  return (
    <>
      <TextInput
        style={estilos.campoEntrada}
        placeholder="Digite o título do livro"
        value={consulta}
        onChangeText={setConsulta}
      />
      <Button title="Buscar" onPress={aoBuscar} />
    </>
  );
}

const estilos = StyleSheet.create({
  campoEntrada: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
