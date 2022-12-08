import { _storeData } from "../../utils";
import { LOGIN_FAILED, LOGIN_INITIATED, LOGIN_SUCCESS } from "./types"

export const login = (email, password) => dispatch => {
    dispatch({
        type: LOGIN_INITIATED
    })
    _storeData('email', email);
    dispatch({ type: LOGIN_SUCCESS })
    // dispatch({ type: LOGIN_FAILED })
}