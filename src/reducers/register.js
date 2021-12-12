import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_RESET
} from "../constants/ActionTypes";


const registerReducer = (state = {}, action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
            return {loading: true}
        case REGISTER_SUCCESS:
            return {loading: false, success: true, user: action.payload}
        case REGISTER_FAILURE:
            return {loading: false, error: action.payload}
        case REGISTER_RESET:
            return {}
        default:
            return state;
    }
}

export default registerReducer;