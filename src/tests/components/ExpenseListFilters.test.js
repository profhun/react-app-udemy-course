import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
            <ExpenseListFilters
                filters={filters}
                setTextFilter={setTextFilter}
                sortByDate={sortByDate}
                sortByAmount={sortByAmount}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />
        );
});

test('render/component ExpenseListFilters render with default values', () => {
    expect(wrapper).toMatchSnapshot();
});

test('render/component ExpenseListFilters render with other values', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('render/component ExpenseListFilters text change', () => {
    const value = 'sör';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('render/component ExpenseListFilters sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled()
});

test('render/component ExpenseListFilters sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled()
});

test('render/component ExpenseListFilters date focus change', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('render/component ExpenseListFilters ', () => {
    const focusedInput = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focusedInput);
    expect(wrapper.state('focusedInput')).toBe(focusedInput);
});