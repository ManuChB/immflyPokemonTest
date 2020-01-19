import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';

import {
    initialize,
    showPokemonInfo,
    getPokemonList,
    getPokemonInfo
} from '../pokemonList.saga';

import pokemonAction from '../../actions/pokemonList.component.action';

jest.mock('axios');

describe('PokemonList saga', () => {
    const pokemonInfo = {
        id: 10,
        name: 'eevee',
        url: '',
        height: 4,
        types: [],
        abilities: []
    };
    const pokemonList = [pokemonInfo];


    describe('initialize()', () => {
        
        const it = sagaHelper(initialize(pokemonAction.initialize()));

        it('should set loading to "true"', (result) => {
            expect(result).toEqual(put(pokemonAction.setLoading(true)));
            return ;
        });

        it('should get pokemon list', (result) => {
            expect(result).toEqual(call(getPokemonList));
            return pokemonList;
        });
        
        it('should set pokemon list', (result) => {
            expect(result).toEqual(put(pokemonAction.setPokemonList(pokemonList)));
            return ;
        });
        it('should set loading to "false"', (result) => {
            expect(result).toEqual(put(pokemonAction.setLoading(false)));
            return ;
        });
    });

    describe('showPokemonInfo()', () => {

        const it = sagaHelper(showPokemonInfo(pokemonAction.showPokemonInfo(pokemonInfo)));

        it('should set loading to "true"', (result) => {
            expect(result).toEqual(put(pokemonAction.setLoading(true)));
            return;
        });

        it('should get pokemon info', (result) => {
            expect(result).toEqual(call(getPokemonInfo, pokemonInfo));
            return pokemonInfo;
        });

        it('should set pokemon info', (result) => {
            expect(result).toEqual(put(pokemonAction.setSelectedPokemonInfo(pokemonInfo)));
            return;
        });
        it('should set loading to "false"', (result) => {
            expect(result).toEqual(put(pokemonAction.setLoading(false)));
            return;
        });
    });
});