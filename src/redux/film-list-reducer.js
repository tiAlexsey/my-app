const SHOW_MORE = 'SHOW_MORE';
const VIEWED = 'VIEWED';
const UNVIEWED = 'UNVIEWED';
const LOAD_DATA = 'LOAD_DATA'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_FILM_COUNT = 'SET_TOTAL_FILM_COUNT';

let initialState = {
    film: [],
    pageSize: 3,
    totalFilmCount: 0,
    currentPage: 1
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
        default:
            return state;
    }
}

export const viewedAC = (filmId) => ({ type: VIEWED, filmId })

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const unViewedAC = (filmId) => ({ type: UNVIEWED, filmId })

export const setFilmAC = (film) => ({ type: LOAD_DATA, film })

export const setTotalFilmCountAC = (totalFilmCount) => ({ type: SET_TOTAL_FILM_COUNT, totalFilmCount })

export default filmListReducer;