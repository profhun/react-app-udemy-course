import selectExpenses from '../../selectors/expenses';
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('selectors/selectExpenses filter by text: 0', () => {
    const filters = {
        text: 'o',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[0], expenses[3] ]);
});

test('selectors/selectExpenses startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[3] ]);
});

test('selectors/selectExpenses endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('selectors/selectExpenses startDate endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(10, 'days'),
        endDate: moment(0).add(1, 'days')
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('selectors/selectExpenses sortBy date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[0], expenses[1], expenses[2], expenses[3] ]);
});

test('selectors/selectExpenses sortBy amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[3], expenses[2], expenses[1], expenses[0] ]);
});