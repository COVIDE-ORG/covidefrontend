import actionTypes from "./actionTypes";

const INITIAL_STATE = {
    currentTab: 0
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TYPE:
            return {
                ...state,
                currentTab: action.payload
            };
    
        default:
            return state;
    }
}

export default reducer;