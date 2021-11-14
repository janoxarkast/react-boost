import {CHANGE_NAME,
    CHANGE_LOCATION,
    CHANGE_AGE,
    CHANGE_WEAPON} from "../Actions/actionTypes";
import initialState from "../initialState";



const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case CHANGE_NAME:
        return {
            ...state,
            name: action.payload
        }
        case CHANGE_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case CHANGE_AGE:
            return {
                ...state,
                age: action.payload
            }
        case CHANGE_WEAPON:
            return {
                ...state,
                weapon: action.payload
            }
        default:
            break;
    }

    return state;
};

export default reducer;
