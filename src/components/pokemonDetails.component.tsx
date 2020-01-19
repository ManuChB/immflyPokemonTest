import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Dimensions } from 'react-native';
import IPokemon from '../models/pokemon.model';
import PokemonImage from './pokemonImage.component';



interface IPokemonDetailProps {
    selectedPokemon: IPokemon,
    showInfoModal: boolean,
    closeModal: () => void;
}

interface IPokemonDetailState {
    orientation: string
}

export default class PokemonDetail extends Component<IPokemonDetailProps, IPokemonDetailState> {
    constructor(props) {
        super(props);

        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
        };

        this.state = {
            orientation: isPortrait() ? 'portrait' : 'landscape'
        };

        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: isPortrait() ? 'portrait' : 'landscape'
            });
        });

    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', () => {});
    }

    render() {
        const { showInfoModal, selectedPokemon, closeModal } = this.props;
        const { orientation } = this.state;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showInfoModal}
            >
                <View style={styles.mainView}>
                    <View style={orientation === 'portrait' ? styles.infoView : styles.landScapeInfoView}>
                        <TouchableHighlight
                            style={styles.closeButton}
                            onPress={() => {
                                closeModal();
                            }}>
                            <Text style={styles.closeText}>X</Text>
                        </TouchableHighlight>
                        <View style={[styles.image, orientation === 'landscape' ? styles.landScapeImage : null]}>
                            <PokemonImage pokemonName={selectedPokemon.name}></PokemonImage>
                        </View>
                        <View>
                            <Text style={styles.name}>{selectedPokemon.name}</Text>
                            <View style={{ flexDirection: 'row'}}>
                                <Text style={styles.bold}>id:</Text>
                                <Text>{selectedPokemon.id}</Text>
                            </View>
                            <Text style={styles.bold}>Type: </Text>
                            {selectedPokemon.types && selectedPokemon.types.map((type, key) => {
                                return (
                                    <Text key={key}>{` - ${type.type.name}`}</Text>
                                )
                            })}
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.bold}>Height:</Text>
                                <Text>{selectedPokemon.height}</Text>
                            </View>
                            <Text style={styles.bold}>Abilities: </Text>
                            {selectedPokemon.abilities && selectedPokemon.abilities.map((ability, key) => {
                                return (
                                    <Text key={key}>{` - ${ability.ability.name}`}</Text>
                                )
                            })}
                        </View>
                    </View>
                </View>

            </Modal>
        );
    }
};


const styles = StyleSheet.create({
    mainView: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#00000080'
    },
    infoView: { 
        backgroundColor: 'white', 
        padding: 70, 
        borderRadius: 10 
    },
    landScapeInfoView: {
        backgroundColor: 'white',
        padding: 70,
        borderRadius: 10,
        flexDirection: 'row'

    },
    closeButton: {
        width: 35,
        height: 35,
        position: 'absolute',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'red', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeText: { 
        color: 'white', 
        fontWeight: 'bold' 
    },
    image: { 
        height: 150, 
        width: 150, 
        resizeMode: 'contain'
    },
    landScapeImage: {
        marginRight: 50
    },
    name: { 
        fontSize: 20,
        fontWeight: 'bold', 
        alignSelf: 'center' 
    },
    bold: {
        fontWeight: 'bold'
    }
});

