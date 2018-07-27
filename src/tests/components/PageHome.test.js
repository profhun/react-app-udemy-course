import React from 'react';
import { shallow } from 'enzyme';
import PageHome from '../../components/PageHome';

test('render/component PageHome', () => {

    const wrapper = shallow(<PageHome />);
    expect(wrapper.find('h1').text()).toBe("Hoooome");
    expect(wrapper).toMatchSnapshot();
});