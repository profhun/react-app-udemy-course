import React from 'react';
import { shallow } from 'enzyme';
import { PageAdd } from '../../components/PageAdd';
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<PageAdd addExpense={addExpense} history={history} />);
});

test('render/component PageAdd render', () => {
    expect(wrapper.find('h1').text()).toBe("Új kiadás:");
    expect(wrapper).toMatchSnapshot();
});


test('render/component PageAdd onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});