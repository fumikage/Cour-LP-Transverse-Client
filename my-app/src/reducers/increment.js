const incrvalue = 10;

const incrementReducer = (state = incrvalue,  action) => {
    switch (action.type) {
        case 'ADD':
            return action.incrvalue;
        default:
            return state;
    }
}

export default incrementReducer;