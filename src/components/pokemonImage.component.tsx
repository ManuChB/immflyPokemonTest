import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

export default class PokemonImage extends Component<{pokemonName: string}> {


    formatName(name: string): string {
        if(name.includes('nidoran')){
            name = name.replace('-', '')
        }
        return name;
    }

    render() {
        const { pokemonName } = this.props;
        return (
            <Image
                style={styles.image}
                source={{ uri: `http://pokestadium.com/sprites/xy/${this.formatName(pokemonName)}.gif` }} />
        );
    }
};


const styles = StyleSheet.create({


    image: {
        flex: 1,
        resizeMode: 'contain'
    }
});



