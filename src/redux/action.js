import actionTypes from "./actionTypes";

export const changeTab = data => ({
    type: actionTypes.CHANGE_TYPE,
    payload: data
});

export const addBeds = data => ({
    type: actionTypes.ADD_BEDS,
    payload: data
});

export const addMeds = data => ({
    type: actionTypes.ADD_MEDS,
    payload: data
});

export const addPlasma = data => ({
    type: actionTypes.ADD_PLASMA,
    payload: data
});

export const addAmbulance = data => ({
    type: actionTypes.ADD_AMBULANCE,
    payload: data
});

export const addOxygen = data => ({
    type: actionTypes.ADD_OXYGEN,
    payload: data
});

export const changeLoading = data => ({
    type: actionTypes.TOGGLE_LOADING,
    payload: data
});

export const changeError = data => ({
    type: actionTypes.TOGGLE_ERROR,
    payload: data
});

export const toggleTable = () => ({
    type: actionTypes.TOGGLE_TABLE,
});

export const selectResource = data => ({
    type: actionTypes.SELECT_RESOURCE,
    payload: data
});

export const selectState = data => ({
    type: actionTypes.SELECT_STATE,
    payload: data
});

export const selectCity = data => ({
    type: actionTypes.SELECT_CITY,
    payload: data
});