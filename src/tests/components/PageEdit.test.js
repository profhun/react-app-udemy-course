import React from 'react';
import { shallow } from 'enzyme';
import { PageEdit } from '../../components/PageEdit';
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
                    <PageEdit
                        editExpense={editExpense}
                        removeExpense={removeExpense}
                        history={history}
                        expense={expenses[1]}
                    />
                );
});

test('render/component PageEdit render', () => {
    expect(wrapper.find('h1').text()).toBe("Kiadás szerkesztése: ");
    expect(wrapper).toMatchSnapshot();
});

test('render/component PageEdit edit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('render/component PageEdit remove', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});