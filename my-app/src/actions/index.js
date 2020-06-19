export const increment = (incrvalue) => {
    return {
        type : 'INCREMENT',
        incrvalue: incrvalue
    };
};

export const reinitialize = () => {
    return {
        type: 'REINITIALIZE'
    };
};

export const  add = (incrvalue) => {
    return {
        type: 'ADD',
        incrvalue: incrvalue
    }
}