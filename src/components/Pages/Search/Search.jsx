import React from "react";
import { addSearchFilm, updateNewSearchFilm } from "redux/state";
import s from './Search.module.css';
import SearchResult from "./SearchResult/SearchResult";


const Search = (props) => {

    let newSearchFilm = React.createRef();

    let onClickAddSearchFilm = () => {
        props.dispatch(addSearchFilm());
    };

    let searchResultElement = props.searchResultPage.searchResult.map(c => (
        <SearchResult text={c.stringSearch} />)
    );

    let onTextAreaChange = () => {
        props.dispatch(updateNewSearchFilm(''));
    };

    let onSearchChange = () => {
        let text = newSearchFilm.current.value;
        debugger;
        props.dispatch(updateNewSearchFilm(text));
    };

    return (
        <div className={s.content}>
            <div className={s.header}>Найти фильм</div>
            <div className={s.search}>
                <textarea ref={newSearchFilm} onChange={onSearchChange}
                    onClick={onTextAreaChange} value={props.newSearchText} />
                <button onClick={onClickAddSearchFilm}>Найти</button>
            </div>
            <div>
                Недавние поиски
                <div>
                    {searchResultElement}
                </div>
            </div>
        </div>
    )
}

export default Search;