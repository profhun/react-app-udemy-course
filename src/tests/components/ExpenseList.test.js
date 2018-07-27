import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses'

test('render/component ExpenseList', () => {

    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper.find('h2').text()).toBe("Expense List");
    expect(wrapper).toMatchSnapshot();
});


test('render/component ExpenseList with no item', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper.find('h4').text()).toBe("Nincs semmi kiadásod. Örüljél!");
    expect(wrapper).toMatchSnapshot();
});
