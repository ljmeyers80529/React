import * as actionTypes from './actionTypes';


export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
}

export const add = (offset) => {
    return {
        type: actionTypes.ADD,
        offset: +offset
    };
}

export const sub = (offset) => {
    return {
        type: actionTypes.SUB,
        offset: +offset
    };
}
