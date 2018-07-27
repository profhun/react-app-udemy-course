import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'SET':
            const {count} = action;
            return {
                count: count
            };
        case 'INCREMENT':
            const {incrementBy} = action;
            return {
                count: state.count + incrementBy
            };

        case 'DECREMENT':
            const {decrementBy} = action;
            return {
                count: state.count - decrementBy
            };

        case 'RESET':
            return {
                count: 0
            };
    }

    return state;
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy : 5}));
store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy : 2}));
store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({count : 100}));


unsubscribe();