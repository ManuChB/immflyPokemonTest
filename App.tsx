import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import PokemonList from './src/components/pokemonList.component';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PokemonList />
    </Provider>
    
  );
}
