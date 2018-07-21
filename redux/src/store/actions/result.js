import * as actionTypes from './actionTypes';

export const saveResult = result => {
    return {
        type: actionTypes.STORE_RESULT,
        result: +result
    };
}

export const store = (result) => {
    return (dispatch, getState) => {                    
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(result));
            }, 2000)
        }
}

export const deleteItem = (id) => {
    return {
        type: actionTypes.DELETE_ITEM,
        resultId: +id
    };
}
