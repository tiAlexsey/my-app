const NEW_SEARCH_FILM = 'NEW-SEARCH-FILM';

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
    ]
}

const searchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_SEARCH_FILM:
            let newSearchResult = {
                userId: 1,
                searchId: 1,
                filmId: 1,
                stringSearch: action.searchText
            }
            return {
                ...state,
                searchResult: [...state.searchResult, newSearchResult]
            }
        default:
            return state;
    }
}

export const addSearchFilm = (searchText) => ({ type: NEW_SEARCH_FILM, searchText })

export default searchResultReducer;