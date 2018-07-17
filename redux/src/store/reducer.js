import * as actionTypes from './actions';

const initialCounter = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})     // use concat instead of push.
            }
        case actionTypes.DELETE_ITEM:
            // const id = 2;                            // one way to remove an item from an arra even if the elements are objects.
            // const newArr = [...state.results];
            // newArr.splice(id, 1);
            const updArr = state.results.filter(result => result.id !== action.resultId)        // preferred
            return {
                ...state,
                results: updArr
            }
        default:
            return state;
    }
};

export default reducer;