import pokemonAction from '../pokemonList.component.action';

describe('PokemonList Actions', () => {
    it('initialize() should return action', () => {
        expect(pokemonAction.initialize()).toMatchSnapshot();
    });
    it('setPokemonList() should return action', () => {
        const pokemonList = [];
        expect(pokemonAction.setPokemonList(pokemonList)).toMatchSnapshot();
    });
    it('showPokemonInfo() should return action', () => {
        const pokemon = {
            name: 'eevee',
            url: '',
            height: 4,
            types: [],
            abilities: []
        };
        expect(pokemonAction.showPokemonInfo(pokemon)).toMatchSnapshot();
    });
    it('setSelectedPokemonInfo() should return action', () => {
        const pokemon ={
            name: 'eevee', 
            url: '', 
            height: 4, 
            types: [], 
            abilities: []
        };
        expect(pokemonAction.setSelectedPokemonInfo(pokemon)).toMatchSnapshot();
    });
    it('closeModal() should return action', () => {
        expect(pokemonAction.closeModal()).toMatchSnapshot();
    });
    it('setLoading() should return action', () => {
        const loading = false;
        expect(pokemonAction.setLoading(loading)).toMatchSnapshot();
    });
});
