import counterReducer from "./counter";
import incrementReducer from "./increment";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    increment: incrementReducer
})

export default allReducers