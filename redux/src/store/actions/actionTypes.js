export const INCREMENT = 'INC';
export const DECREMENT = 'DEC';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE';
export const DELETE_ITEM = 'DELETE';

export const increment = () => {
    return {
        type: INCREMENT
    };
}

export const decrement = () => {
    return {
        type: DECREMENT
    };
}

export const add = (offset) => {
    return {
        type: ADD,
        offset: +offset
    };
}

export const sub = (offset) => {
    return {
        type: SUB,
        offset: +offset
    };
}

export const saveResult = result => {
    return {
        type: STORE_RESULT,
        result: +result
    };
}

export const store = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result));
            }, 2000)
        }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        resultId: +id
    };
}
