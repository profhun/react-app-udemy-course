import React from 'react';
import { shallow } from 'enzyme';
import Page404 from '../../components/Page404';

test('render/component Page404', () => {

    const wrapper = shallow(<Page404 />);
    expect(wrapper.find('h1').text()).toBe("404");
    expect(wrapper).toMatchSnapshot();
});