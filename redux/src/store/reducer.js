const initialCounter = {
    counter: 0
}

const reducer = (state = initialCounter, action) => {

    switch (action.type) {
        case 'INC': 
            return {
                counter: state.counter + 1
            }
        case 'DEC':
            return {
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                counter: state.counter + action.offset
            }
        case 'SUB':
               return {
            counter: state.counter - action.offset
            }
        default:
            return state;
    };
    return state;
};

export default reducer;