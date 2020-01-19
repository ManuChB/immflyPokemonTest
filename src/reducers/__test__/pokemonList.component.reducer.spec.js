import pokemonAction from '../../actions/pokemonList.component.action';
import pokemonReducer from '../pokemonList.component.reducer';

describe('PokemonList reducer', () => {
    const initialState = {
        pokemonList: [],
        selectedPokemon: null,
        showInfoModal: false,
        loading: false
    };

    const pokemon = {
        name: 'eevee',
        url: '',
        height: 4,
        types: [],
        abilities: []
    };
    const pokemonList =[pokemon];
    
    it('handle setPokemonList()', () => {
        expect(pokemonReducer(initialState, pokemonAction.setPokemonList(pokemonList))).toMatchSnapshot();
    });

    it('handle setSelectedPokemonInfo()', () => {
        expect(pokemonReducer(initialState, pokemonAction.setSelectedPokemonInfo(pokemon))).toMatchSnapshot();
    });

    it('handle closeModal()', () => {
        expect(pokemonReducer(initialState, pokemonAction.closeModal())).toMatchSnapshot();
    });

    it('handle setLoading()', () => {
        const loading = false;
        expect(pokemonReducer(initialState, pokemonAction.setLoading(loading))).toMatchSnapshot();
    });

});
