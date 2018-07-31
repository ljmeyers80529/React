import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBulder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('Burger builder...', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />)
    });

    it('should render build controls when receiving ingredients', () => {
        wrapper.setProps({ings: { salad: 0 }});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

});