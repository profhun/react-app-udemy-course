import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test('render/component ExpenseForm without data', () => {

    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});


test('render/component ExpenseForm with data', () => {

    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('render/component ExpenseForm show error on invalid data', () => {

    const wrapper = shallow(<ExpenseForm />);
    //before change
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    //after change
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('render/component ExpenseForm submit description', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'this is a test description';

    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('description')).toBe(value);
});

test('render/component ExpenseForm submit note', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'this is a test note';

    wrapper.find('textarea').at(0).simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('note')).toBe(value);
});

test('render/component ExpenseForm submit valid amount', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '200';

    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });

    expect(wrapper.state('amount')).toBe(value);
});

test('render/component ExpenseForm submit invalid amount', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'this is a test amount';

    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('render/component ExpenseForm submit form with valid data', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:    expenses[1].description,
        amount:         expenses[1].amount,
        note:           expenses[1].note,
        createdAt:      expenses[1].createdAt
    });
});


test('render/component ExpenseForm SingleDatePicker onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('render/component ExpenseForm SingleDatePicker onFocusChange', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('focused')).toBe(focused);
});