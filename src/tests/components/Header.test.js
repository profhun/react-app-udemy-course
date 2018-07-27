import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('render/component Header', () => {

    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe("Kiadások");
    expect(wrapper).toMatchSnapshot();
});