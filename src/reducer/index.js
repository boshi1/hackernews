import {combineReducers} from 'redux';
import AppReducers from './AppReducers';
const initialState = null;

const appReducers = combineReducers({
    AppReducers
});

const rootReducer = (state = initialState, action) => {
    return appReducers(state, action);
};

export default rootReducer;
