const SHOW_MORE = 'SHOW_MORE';
const VIEWED = 'VIEWED';
const UNVIEWED = 'UNVIEWED';
const SET_FILM = 'SET_FILM'

let initialState = {
    film: []
    // [
    //     { id: 1, filmName: 'Начало', viewed: false, filmPoster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a4a709fc-8dd9-41f4-8105-17d6e0b8bed0/2560x' },
    //     { id: 2, filmName: 'НЕ Начало', viewed: false, filmPoster: 'http://risovach.ru/upload/2013/08/mem/tvoe-vyrazhenie-lica_26335918_orig_.jpeg' }
    // ]
}

const viewedReducer = (state = initialState, action) => {
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
        case SET_FILM:
            return { ...state, film: [...state.film, ...action.film] }
        default:
            return state;
    }
}

export const viewedAC = (filmId) => ({ type: VIEWED, filmId })

export const unViewedAC = (filmId) => ({ type: UNVIEWED, filmId })

export const setFilmAC = (film) => ({ type: SET_FILM, film })

export default viewedReducer;