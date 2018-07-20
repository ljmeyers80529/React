import * as actionTypes from '../actions/actions';

const initialCounter = {
    results: []
}

const reducer = (state = initialCounter, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})     // use concat instead of push.
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