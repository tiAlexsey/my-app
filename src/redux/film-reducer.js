import { filmAPI } from "api/api";

const SET_FILM = 'SET_FILM';

let initialState = {
    film: null,
    comments: []
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILM:
            return {
                ...state,
                film: action.item.film,
                comments: [...action.item.comments]
            }
        default:
            return state;
    }
}

export const setFilm = (item) => ({ type: SET_FILM, item })

export const getFilm = (filmId) => {
    return (dispatch) => {
        dispatch(setFilm({ film: null, comments: [] }));
        filmAPI.getFilm(filmId).then(data => {
            dispatch(setFilm(data.item));
        })
    }
}

export const addComment = (comment) => {
    return (dispatch) => {
        filmAPI.addComment(comment).then(data => {
        dispatch(getFilm(comment.filmId))
        })
    }
}

export default filmReducer;