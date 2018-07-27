import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('reducers/expenses default values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual([]);
});

test('reducers/expenses remove by ID', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2], expenses[3]]);
});

test('reducers/expenses remove by not existing ID', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'unknown'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('reducers/expenses add', () => {

    const expense = {
        id: 'test-id',
        description: 'kalap a fejen',
        amount: 500,
        note: 'blaaaa blaaa blaa',
        createdAt: moment(0).valueOf()
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

test('reducers/expenses edit', () => {

    const amount = 2000;

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[0].amount).toBe(amount);
});

test('reducers/expenses edit not exists', () => {

    const amount = 2000;

    const action = {
        type: 'EDIT_EXPENSE',
        id: 'unkonwn',
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});