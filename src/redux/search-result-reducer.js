const ADD_NEW_SEARCH_FILM = 'NEW-SEARCH-FILM';
const UPDATE_NEW_SEARCH_FILM = 'UPDATE-NEW-SEARCH-FILM';
const WRITE_NEW_SEARCH_FILM_TEXT = 'Введите название фильма для поиска';

const searchResultReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_SEARCH_FILM:
            let newSearchResult = {
                userId: 1,
                searchId: 1,
                filmId: 1,
                stringSearch: state.newSearchText
            }
            state.searchResult.push(newSearchResult);
            state.newSearchText = WRITE_NEW_SEARCH_FILM_TEXT;
            return state;
        case UPDATE_NEW_SEARCH_FILM:
            state.newSearchText = action.text;
            return state;
        default:
            return state;
    }
}

export const addSearchFilm = () => ({ type: ADD_NEW_SEARCH_FILM })

export const updateNewSearchFilm = (text) => ({ type: UPDATE_NEW_SEARCH_FILM, text: text })

export default searchResultReducer;