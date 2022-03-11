const SHOW_MORE = 'SHOW_MORE';
const VIEWED = 'VIEWED';
const UNVIEWED = 'UNVIEWED';
const LOAD_DATA = 'LOAD_DATA'

let initialState = {
    film: []
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
            return { ...state, film: [...state.film, ...action.film] }
        default:
            return state;
    }
}

export const viewedAC = (filmId) => ({ type: VIEWED, filmId })

export const unViewedAC = (filmId) => ({ type: UNVIEWED, filmId })

export const setFilmAC = (film) => ({ type: LOAD_DATA, film })

export default filmListReducer;