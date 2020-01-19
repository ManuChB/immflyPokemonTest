import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import POKEMON_COMPONENT_CONST from '../constants/pokemonList.component.constants'
import pokemonListActions from '../actions/pokemonList.component.action';
import IPokemon from '../models/pokemon.model';

export default [
    takeLatest(POKEMON_COMPONENT_CONST.INITIALIZE, initialize),
    takeLatest(POKEMON_COMPONENT_CONST.SHOW_POKEMON_INFO, showPokemonInfo)
];

export function* initialize(action) {
    try {
        yield put(pokemonListActions.setLoading(true));
        const pokemonList: Array<IPokemon> = yield call(getPokemonList);
        yield put(pokemonListActions.setPokemonList(pokemonList));
        yield put(pokemonListActions.setLoading(false));

    } catch (e) {
        put(pokemonListActions.setLoading(false));
        console.log(`[error][pokemonList][saga][initialize]>>> ${e}`);
    }
}

export function* showPokemonInfo(action) {
    try {
        yield put(pokemonListActions.setLoading(true));
        const pokemonInfo = yield call(getPokemonInfo, action.payload );
        const { id, types, height, abilities } = pokemonInfo;
        const pokemon: IPokemon = { ...action.payload, id, types, height, abilities  }
        yield put(pokemonListActions.setSelectedPokemonInfo(pokemon));
        yield put(pokemonListActions.setLoading(false));

    } catch (e) {
        put(pokemonListActions.setLoading(false));
        console.log(`[error][pokemonList][saga][getPokemonInfo]>>> ${e}`);
    }
}

export function getPokemonList(): Promise<Array<IPokemon>> {
    return axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`
    )
        .then(response => {
            return response.data.results;
        })
        .catch(error => {
            console.log(`[error][getPokemonInfo][saga][getPokemonList]>>> ${error}`);
        });
}

export function getPokemonInfo(pokemon: IPokemon): Promise<IPokemon> {
    return axios.get(
        pokemon.url
    )
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(`[error][getPokemonInfo][saga][getPokemonInfo]>>> ${error}`);
        });
}