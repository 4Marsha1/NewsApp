import { LOGIN_FAILED, LOGIN_INITIATED, LOGIN_SUCCESS } from "../actions/types"

const initialState = {
    isLoggingIn: false,
    isLoggedIn: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_INITIATED:
            return {
                isLoggingIn: true,
                isLoggedIn: false,
            }
        case LOGIN_SUCCESS:
            return {
                isLoggingIn: false,
                isLoggedIn: true,
            }
        case LOGIN_FAILED:
            return {
                isLoggingIn: false,
                isLoggedIn: false,
            }
        default: return state;
    }
}

export default reducer;