import React from "react";
import { addSearchFilmActionCreator, updateNewSearchFilmTextActionCreator } from "redux/search-result-reducer";
import Search from "./Search";


const SearchContainer = (props) => {

    let state = props.store.getState();

    let addSearchFilm = () => {
        props.store.dispatch(addSearchFilmActionCreator());
    };

    let onSearchFilmChange = (text) => {
        props.store.dispatch(updateNewSearchFilmTextActionCreator(text));
    };

    let onTextAreaChange = () => {
        props.store.dispatch(updateNewSearchFilmTextActionCreator(''));
    };
    return (
        <Search addSearchFilm={addSearchFilm}
            updateNewSearchFilmChange={onTextAreaChange}
            updateNewSearchFilm={onSearchFilmChange}
            searchResult={state.searchResultPage.searchResult}
            newSearchText={state.searchResultPage.newSearchText}
        />
    )
}

export default SearchContainer;