import {combineReducers, createStore} from 'redux';
import profileReducer from './Reducers/profileReducer';
import profileState from "./initialState";

export const rootReducer = combineReducers({
    profile: profileReducer
});

export const store = createStore(rootReducer, {profile: profileState});