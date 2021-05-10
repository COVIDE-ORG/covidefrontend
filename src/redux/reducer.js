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
    isTable: false,
    selected_state: '',
    selected_city: '',
    selected_resource: '',
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
                data: { ...state.data, beds: [action.payload.data] },
                headers: action.payload.headers,
                states: action.payload.states,
                cities: action.payload.cities
            };
        case actionTypes.ADD_OXYGEN:
            return {
              ...state,
              data: { ...state.data, oxygen: [action.payload.data] },
              headers: action.payload.headers,
              states: action.payload.states,
              cities: action.payload.cities,
            };
        case actionTypes.ADD_AMBULANCE:
            return {
              ...state,
              data: { ...state.data, ambulance: [action.payload.data] },
              headers: action.payload.headers,
              states: action.payload.states,
              cities: action.payload.cities,
            };
        case actionTypes.ADD_PLASMA:
            return {
              ...state,
              data: { ...state.data, plasma: [action.payload.data] },
              headers: action.payload.headers,
              states: action.payload.states,
              cities: action.payload.cities,
            };
        case actionTypes.ADD_MEDS:
            return {
              ...state,
              data: { ...state.data, meds: [action.payload.data] },
              headers: action.payload.headers,
              states: action.payload.states,
              cities: action.payload.cities,
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
        case actionTypes.TOGGLE_TABLE:
            return {
                ...state,
                isTable: state.isTable ? false : true
            };
        case actionTypes.SELECT_RESOURCE:
            return {
                ...state,
                selected_resource: action.payload
            }
        case actionTypes.SELECT_STATE:
            return {
                ...state,
                selected_state: action.payload
            }
        case actionTypes.SELECT_CITY:
            return {
                ...state,
                selected_city: action.payload
            }
        default:
            return state;
    }
}

export default reducer;