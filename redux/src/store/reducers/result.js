import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialCounter = {
    results: []
}

const deleteResult = (state, action) => {
    const updArr = state.results.filter(result => result.id !== action.resultId);
    return updateObject(state, {results: updArr});
}

const reducer = (state = initialCounter, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result*2})});

        case actionTypes.DELETE_ITEM:
            return deleteResult(state, action);

        default:
            return state;
    }
};

export default reducer;;