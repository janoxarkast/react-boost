import {CHANGE_AGE, CHANGE_LOCATION, CHANGE_NAME, CHANGE_WEAPON} from "./actionTypes";

export const setName = name => ({
    type: CHANGE_NAME,
    payload: name
});

export const setLocation = location => ({
    type: CHANGE_LOCATION,
    payload: location
});

export const setAge = age => ({
    type: CHANGE_AGE,
    payload: age
});

export const setWeapon = weapon => ({
    type: CHANGE_WEAPON,
    payload: weapon
});