import POKEMON_COMPONENT_CONST from '../constants/pokemonList.component.constants';
import IPokemon from '../models/pokemon.model';
import { IPokemonListActions } from '../components/pokemonList.component';

const pokemonAction: IPokemonListActions = {
    initialize() {
        return {
            type: POKEMON_COMPONENT_CONST.INITIALIZE
        }
    },
    setPokemonList(list: Array<IPokemon>) {
        return {
            type: POKEMON_COMPONENT_CONST.SET_POKEMON_LIST,
            payload: list
        }
    },
    showPokemonInfo(pokemon: IPokemon) {
        return {
            type: POKEMON_COMPONENT_CONST.SHOW_POKEMON_INFO,
            payload: pokemon
        }
    },
    setSelectedPokemonInfo(pokemon: IPokemon) {
        return {
            type: POKEMON_COMPONENT_CONST.SET_SELECTED_POKEMON_INFO,
            payload: pokemon
        }
    },
    closeModal() { 
        return {
            type: POKEMON_COMPONENT_CONST.CLOSE_MODAL,
        }
    },
    setLoading(loading: boolean) {
        return {
            type: POKEMON_COMPONENT_CONST.LOADING,
            payload: loading
        }
    },
}

export default  pokemonAction;