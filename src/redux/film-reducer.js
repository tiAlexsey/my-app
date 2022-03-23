import { filmAPI } from "api/api";

const ADD_COMMENT = 'ADD_COMMENT';
const SET_FILM = 'SET_FILM';


let initialState = {
    film: null,
    comments: []
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                id: 1,
                filmId: 1,
                text: action.commentText,
                userId: 1,
                like: 10,
                dislike: 2,
                user: {
                    id: 1,
                    name: "Катя",
                    url: "https://img1.goodfon.ru/original/320x240/6/ea/lisa-ryzhaia-morda-vzgliad-portret.jpg"
                }
            }
            return {
                ...state,
                comments: [...state.comments, newComment]
            }
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

export const addComment = (commentText) => ({ type: ADD_COMMENT, commentText })

export const setFilm = (item) => ({ type: SET_FILM, item })

export const getFilm = (filmId) => {
    return (dispatch) => {
        dispatch(setFilm({ film: null, comments: [] }));
        filmAPI.getFilm(filmId).then(data => {
            dispatch(setFilm(data.item));
        })
    }
}

export default filmReducer;