const initialCounter = {
    counter: 0,
    results: []
}

const reducer = (state = initialCounter, action) => {

    switch (action.type) {
        case 'INC': 
            const newState = Object.assign({}, state);    
            newState.counter = state.counter + 1;  // one way to implment state immutably.
            return newState;
        case 'DEC':
            return {
                ...state,                                   // preferred way.
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.offset
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.offset
            }
        case 'STORE':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})     // use concat instead of push.
            }
        default:
            return state;
    };
};

export default reducer;