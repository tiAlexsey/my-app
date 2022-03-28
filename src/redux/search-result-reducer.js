import { filmAPI } from "api/api";

const NEW_SEARCH = 'NEW-SEARCH';

let initialState = {
    searchResult: []
}

const searchResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_SEARCH:
            return {
                ...state,
                searchResult: [...action.element]
            }
        default:
            return state;
    }
}
export const updateListFilm = (element) => ({ type: NEW_SEARCH, element })

export const searchFilm = (text) => {
    return (dispatch) => {
        dispatch(updateListFilm([]));
        filmAPI.searchFilm(text).then(data => {
            dispatch(updateListFilm(data.item));
        })
    }
}

export default searchResultReducer;