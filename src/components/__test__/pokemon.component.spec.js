import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Pokemon from '../pokemon.component';

configure({
    adapter: new Adapter()
});


describe('Pokemon component', () => {
    const pokemon = {
        id: 10,
        name: 'eevee',
        url: '',
        height: 4,
        types: [],
        abilities: []
    };
    const onPress = jest.fn();

    it('renders as expected', () => {
        //when
        const wrapper = shallow(<Pokemon pokemon={pokemon} onPress={onPress}></Pokemon>);
        //expect
        expect(wrapper).toMatchSnapshot();
    });
});