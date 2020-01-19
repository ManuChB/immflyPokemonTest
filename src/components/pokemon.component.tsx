import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IPokemon from '../models/pokemon.model';
import PokemonImage from './pokemonImage.component';


interface IPokemonProps {
    pokemon: IPokemon,
    onPress: (pokemon) => void;
}

export default class Pokemon extends Component<IPokemonProps> {



    render() {
        const { pokemon, onPress } = this.props;
        return (

            <TouchableOpacity style={styles.touchable}
                onPress={() => onPress(pokemon)}>
                <View style={styles.mainView} >
                    <View style={styles.image}>
                        <PokemonImage pokemonName={pokemon.name}></PokemonImage>
                    </View>
                    <Text  >{pokemon.name}</Text>
                </View>
            </TouchableOpacity>

        );
    }
};


const styles = StyleSheet.create({
    touchable: { 
        height: 125, 
        width: 125, 
        alignItems: 'center' 
    },
    image: { 
        height: 100, 
        width: 100, 
        resizeMode: 'contain' 
    },
    mainView: {
        alignItems: 'center', 
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: 'white'
    }
});



