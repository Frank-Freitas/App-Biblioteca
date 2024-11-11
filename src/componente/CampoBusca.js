import React from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';

export default function CampoBusca({ query, setQuery, onBuscar }) {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Digite o título do livro"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={onBuscar} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
