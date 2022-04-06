import { filmAPI } from "api/api";

const VIEWED = 'VIEWED';
const UNVIEWED = 'UNVIEWED';
const LOAD_DATA = 'LOAD_DATA'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FILM_COUNT = 'SET_TOTAL_FILM_COUNT';
const TOGGLE_IS_FEETCHING = 'TOGGLE_IS_FEETCHING';

let initialState = {
    film: [],
    pageSize: 4,
    totalFilmsCount: 0,
    currentPage: 1,
    isFetching: false
}

const filmListReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEWED:
            return {
                ...state, film: state.film.map(f => {
                    if (f.id === action.filmId) {
                        return { ...f, viewed: true }
                    }
                    return f
                })
            }
        case UNVIEWED:
            return {
                ...state, film: state.film.map(f => {
                    if (f.id === action.filmId) {
                        return { ...f, viewed: false }
                    }
                    return f
                })
            }
        case LOAD_DATA:
            return { ...state, film: [...action.film] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_FILM_COUNT:
            return { ...state, totalFilmCount: action.totalFilmCount }
        case TOGGLE_IS_FEETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}

export const viewed = (filmId) => ({ type: VIEWED, filmId })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const unViewed = (filmId) => ({ type: UNVIEWED, filmId })

export const setFilm = (film) => ({ type: LOAD_DATA, film })

export const setTotalFilmCount = (totalFilmCount) => ({ type: SET_TOTAL_FILM_COUNT, totalFilmCount })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FEETCHING, isFetching })


export const setFilmsCount = () => {
    return (dispatch) => {
        filmAPI.getFilmsCount().then(response => {
            dispatch(setTotalFilmCount(response.item))
        })
    }
}

export const requestFilms = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        filmAPI.getFilms(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setFilm(data.item));
        });
    }
}

export default filmListReducer;