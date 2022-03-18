const ADD_NEW_SEARCH_FILM = 'NEW-SEARCH-FILM';
const UPDATE_NEW_SEARCH_FILM = 'UPDATE-NEW-SEARCH-FILM';
const WRITE_NEW_SEARCH_FILM_TEXT = 'Введите название фильма для поиска';
const CHANGE_NEW_SEARCH_FILM_TEXT = 'CHANGE_NEW_SEARCH_FILM_TEXT';

let initialState = {
    searchResult: [
        {
            userId: 1,
            searchId: 1,
            stringSearch: "Начало",
            filmId: 1
        }, {
            userId: 1,
            searchId: 2,
            stringSearch: "А кто это сделал",
            filmId: 2
        }
    ],
    newSearchText: WRITE_NEW_SEARCH_FILM_TEXT
}

const searchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_SEARCH_FILM:
            let newSearchResult = {
                userId: 1,
                searchId: 1,
                filmId: 1,
                stringSearch: state.newSearchText
            }
            return {
                ...state,
                searchResult: [...state.searchResult, newSearchResult],
                newSearchText: WRITE_NEW_SEARCH_FILM_TEXT
            }
        case UPDATE_NEW_SEARCH_FILM:
            return {
                ...state,
                newSearchText: action.text
            }
        case CHANGE_NEW_SEARCH_FILM_TEXT:
            return {
                ...state,
                newSearchText: ''
            }
        default:
            return state;
    }
}

export const addSearchFilm = () => ({ type: ADD_NEW_SEARCH_FILM })

export const updateNewSearchFilmText = (text) => ({ type: UPDATE_NEW_SEARCH_FILM, text: text })

export const changeNewSearchFilmText = () => ({ type: CHANGE_NEW_SEARCH_FILM_TEXT })

export default searchResultReducer;