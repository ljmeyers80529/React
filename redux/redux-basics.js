const redux = require('redux');
const createStore = redux.createStore;

const initalState = {
    counter: 0
}

// reducer
const rootReducer = (state = initalState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// store
const store = createStore(rootReducer);
console.log(store.getState());

// subscrption
store.subscribe(() => {
    console.log('Subscription ', store.getState());
});

// dispacting acton
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
