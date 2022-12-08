import axios from "axios"
import { FETCH_NEWS_FAILED, FETCH_NEWS_INITIATED, FETCH_NEWS_SUCCESS } from "./types"
import { NEWS_API_KEY } from "../../constants";

export const fetchNews = () => dispatch => {
    dispatch({
        type: FETCH_NEWS_INITIATED
    })
    axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${NEWS_API_KEY}`)
        .then(res => {
            dispatch({ type: FETCH_NEWS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_NEWS_FAILED, payload: err.message })
        })
}

export const fetchNewsByFilter = (item, from_date, to_date) => dispatch => {
    dispatch({
        type: FETCH_NEWS_INITIATED
    })
    axios.get(`https://newsapi.org/v2/everything?q=${item}&from=${from_date}&to=${to_date}&sortBy=popularity&apiKey=${NEWS_API_KEY}`)
        .then(res => {
            dispatch({ type: FETCH_NEWS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_NEWS_FAILED, payload: err.message })
        })
}