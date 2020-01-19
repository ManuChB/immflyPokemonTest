import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PokemonDetails from '../pokemonDetails.component';

configure({
    adapter: new Adapter()
});


describe('PokemonDetail component', () => {
    const pokemon = {
        id: 10,
        name: 'eevee',
        url: '',
        height: 4,
        types: [],
        abilities: []
    };
    const closeModal = jest.fn();

    it('renders as expected', () => {
        //when
        const wrapper = shallow( 
            <PokemonDetails 
            selectedPokemon = { pokemon }
            showInfoModal = {true}
            closeModal = { closeModal }
            > </PokemonDetails>
        );
        //expect
        expect(wrapper).toMatchSnapshot();
    });
});
