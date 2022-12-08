import { FETCH_NEWS_FAILED, FETCH_NEWS_INITIATED, FETCH_NEWS_SUCCESS } from "../actions/types"

const initialState = {
    isLoading: false,
    isLoaded: false,
    news: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_INITIATED:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_NEWS_SUCCESS:
            return {
                isLoading: false,
                isLoaded: true,
                news: action.payload,
                error: ''
            }
        case FETCH_NEWS_FAILED:
            return {
                isLoading: false,
                isLoaded: false,
                news: {},
                error: action.payload
            }
        default: return state;
    }
}

export default reducer;