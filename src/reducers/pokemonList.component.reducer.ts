import POKEMON_COMPONENT_CONST from '../constants/pokemonList.component.constants';
import { IPokemonListState } from '../components/pokemonList.component';

const initialState: IPokemonListState = {
    pokemonList: [],
    selectedPokemon: null,
    showInfoModal: false,
    loading: false
};
const pokemonReducer = (state: IPokemonListState = initialState, action) => {
    switch (action.type) {
        case POKEMON_COMPONENT_CONST.SET_POKEMON_LIST:
            return {
                ...state,
                pokemonList: action.payload
            };
        case POKEMON_COMPONENT_CONST.SET_SELECTED_POKEMON_INFO:
            return {
                ...state,
                selectedPokemon: action.payload,
                showInfoModal: true
            };
        case POKEMON_COMPONENT_CONST.CLOSE_MODAL:
            return {
                ...state,
                showInfoModal: false
            };
        case POKEMON_COMPONENT_CONST.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
}
export default pokemonReducer;