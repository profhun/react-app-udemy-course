import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses'

test('render/component ExpenseListItem', () => {

    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper.find('h4').text()).toBe(expenses[0].description);
    expect(wrapper).toMatchSnapshot();
});