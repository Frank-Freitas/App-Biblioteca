
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BarraNavegacaoInferior({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabItem}>
            <Text style={isFocused ? styles.activeTab : styles.inactiveTab}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  tabItem: {
    padding: 10,
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#000',
  },
  inactiveTab: {
    color: '#888',
  },
});
