import actionTypes from "./actionTypes";

const INITIAL_STATE = {
    currentTab: 0,
    oxygen: [],
    meds: [],
    ambulance: [],
    plasma: [],
    beds: [],
    states: [],
    cities: [],
    headers: [],
    isError: false,
    isLoading: true,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TYPE:
            return {
                ...state,
                currentTab: action.payload,
            };
        case actionTypes.ADD_BEDS:
            return {
                ...state,
                beds: [...state.beds, ...action.payload.data],
                headers: action.payload.headers,
                states: action.payload.states,
                cities: action.payload.cities
            };
        case actionTypes.ADD_OXYGEN:
            return {
                ...state,
                oxygen: [...state.oxygen, ...action.payload.data],
                headers: action.payload.headers,
                states: action.payload.states,
                cities: action.payload.cities
            };
        case actionTypes.ADD_AMBULANCE:
            return {
                ...state,
                ambulance: [...state.ambulance, ...action.payload.data],
                headers: action.payload.headers,
                states: action.payload.states,
                cities: action.payload.cities
            };
        case actionTypes.ADD_PLASMA:
            return {
                ...state,
                plasma: [...state.plasma, ...action.payload.data],
                headers: action.payload.headers,
                states: action.payload.states,
                cities: action.payload.cities
            };
        case actionTypes.ADD_MEDS:
            return {
                ...state,
                meds: [...state.meds, ...action.payload.data],
                headers: action.payload.headers,
                states: action.payload.states,
                cities: action.payload.cities
            };
        case actionTypes.TOGGLE_LOADING:
            return {
                ...state,
                isLoading: state.isLoading ? false : true
            };
        case actionTypes.TOGGLE_ERROR:
            return {
                ...state,
                isError: state.isError ? false : true
            };
        default:
            return state;
    }
}

export default reducer;