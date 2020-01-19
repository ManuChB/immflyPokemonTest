import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PokemonList from '../pokemonList.component';
import configureStore from '../../../store/configureStore';

configure({ adapter: new Adapter() });

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('PokemonList component', () => {

    it('renders as expected', () => {
        //when
        const wrapper = shallow( 
            <PokemonList store= {mockStore}></PokemonList>
        );
        //expect
        expect(wrapper.dive()).toMatchSnapshot();
    });
});