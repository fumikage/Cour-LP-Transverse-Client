const counterReducer = (state = 0,  action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.incrvalue;
        case 'REINITIALIZE' :
            return 0;
        default:
            return state;
    }
}

export default counterReducer;
