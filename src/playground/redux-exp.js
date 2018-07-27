import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return [...state, action.expense];

        case "REMOVE_EXPENSE":
            return state.filter(({id}) => id !== action.id );

        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...state,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: action.sortBy
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, {text = '', sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description && expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt >= b.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount'){
            return a.amount >= b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const exp1 = store.dispatch(addExpense({
    description: 'albi',
    amount: 5000
}));

const exp2 = store.dispatch(addExpense({
    description: 'kaja',
    amount: 10000
}));

store.dispatch(addExpense({
    description: 'albi',
    amount: 2000
}));

store.dispatch(addExpense({
    description: 'albi',
    amount: 2500
}));

// store.dispatch(removeExpense({
//     id: exp1.expense.id
// }));

store.dispatch(editExpense(
    exp2.expense.id,
    {
        amount: 100000
    }
));

store.dispatch(setTextFilter('albi'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(11111));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(11111));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'blaaaa',
        description: 'havi kiadás',
        note: 'asszem',
        amount: 10000,
        createdAt: 0
    }],
    filters: {
        text: 'kiadás',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

