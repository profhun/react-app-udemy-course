import moment from 'moment'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'

test('setTextFilter value', () => {
    const filter = setTextFilter('pizza');

    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'pizza'
    });
});

test('setTextFilter empty', () => {
    const filter = setTextFilter();

    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ""
    });
});

test('sortByAmount', () => {
    const filter = sortByAmount();

    expect(filter).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('sortByDate', () => {
    const filter = sortByDate();

    expect(filter).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

test('setStartDate value', () => {
    const filter = setStartDate(moment(0));

    expect(filter).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('setStartDate empty', () => {
    const filter = setStartDate();

    expect(filter).toEqual({
        type: 'SET_START_DATE',
        startDate: undefined
    });
});

test('setEndDate value', () => {
    const filter = setEndDate(moment(0));

    expect(filter).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('setEndDate empty', () => {
    const filter = setEndDate();

    expect(filter).toEqual({
        type: 'SET_END_DATE',
        endDate: undefined
    });
});