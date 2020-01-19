import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PokemonImage from '../pokemonImage.component';

configure({
    adapter: new Adapter()
});


describe('PokemonImage component', () => {
    const name =  'eevee';

    it('renders as expected', () => {
        //when
        const wrapper = shallow( < PokemonImage pokemonName = { name } > </PokemonImage>);
        //expect
        expect(wrapper).toMatchSnapshot();
    });
});