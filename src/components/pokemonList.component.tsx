import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { bindActionCreators, Action } from 'redux';
import { connect } from 'react-redux';

import pokemonAction from '../actions/pokemonList.component.action';
import PokemonDetail from './pokemonDetails.component';
import Pokemon from './pokemon.component';
import IPokemon from '../models/pokemon.model';

export interface IPokemonListProps {
    state: IPokemonListState,
    actions: IPokemonListActions
}
export interface IPokemonListState {
    pokemonList: Array<IPokemon>,
    selectedPokemon: IPokemon,
    showInfoModal: boolean,
    loading: boolean
}
export interface IPokemonListActions {
    initialize: () => Action;
    showPokemonInfo: (pokemon: IPokemon) => Action;
    closeModal: () => Action;
    setPokemonList: (list: Array<IPokemon>) => Action;
    setSelectedPokemonInfo: (pokemon: IPokemon) => Action;
    setLoading: (loading: boolean) => Action;
}

class PokemonList extends Component<IPokemonListProps> { 

    componentDidMount() {
        this.props.actions.initialize();
    }

    render() {
        const { state: { pokemonList, selectedPokemon, showInfoModal, loading }, actions: { showPokemonInfo, closeModal } } = this.props;
        return (
            <View style={styles.container}>
                {loading &&
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>}
                
                {!!selectedPokemon && <PokemonDetail selectedPokemon={selectedPokemon} showInfoModal={showInfoModal} closeModal={closeModal.bind(this)}></PokemonDetail>}
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <View style={styles.title}>
                        <Image style={styles.image}
                            source={require('../../assets/pokemon-logo-vector.png')} />
                        <Text style={styles.mainTitleTxt}> Generation 1</Text>
                        <Text style={styles.subTitleTxt}>151 Pokemon</Text>
                    </View>
                    {pokemonList.map((pokemon, key) => {
                        return (
                            <Pokemon key={key} pokemon = { pokemon } onPress = { showPokemonInfo.bind(this)}></Pokemon>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c3c5c7',
        justifyContent: 'center',
        paddingTop: 35
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000080',
        zIndex: 10
    },
    title: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    image: { 
        height: 150, 
        width: 300 
    },
    mainTitleTxt: { 
        fontSize: 25, 
        fontWeight: 'bold' 
    },
    subTitleTxt: { 
        fontSize: 20 
    }
});


function mapStateToProps(state: any) {
    return { state: state.pokemonList };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: {
            ...bindActionCreators<IPokemonListActions, any>(pokemonAction, dispatch)
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
