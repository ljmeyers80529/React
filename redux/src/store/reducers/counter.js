import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialCounter = {
    counter: 0
}

const reducer = (state = initialCounter, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT: 
            return updateObject(state, {counter: state.counter + 1});

        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});

        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.offset});

        case actionTypes.SUB:
            return updateObject(state, {counter: state.counter - action.offset});

        default:
            return state;
    }
};

export default reducer;