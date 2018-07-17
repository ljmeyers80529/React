import * as actionTypes from '../actions';

const initialCounter = {
    counter: 0
}

const reducer = (state = initialCounter, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT: 
            const newState = Object.assign({}, state);    
            newState.counter = state.counter + 1;  // one way to implment state immutably.
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,                                   // preferred way.
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.offset
            }
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.offset
            }
        default:
            return state;
    }
};

export default reducer;