import React from "react";
import s from './Search.module.css';
import SearchResult from "./SearchResult/SearchResult";


const Search = (props) => {

    let newSearchFilm = React.createRef();

    let searchResultElement = props.searchResult.map(c => (
        <SearchResult text={c.stringSearch} />)
    );

    let addSearchFilm = () => {
        props.addSearchFilm();
    };

    let onSearchChange = () => {
        let text = newSearchFilm.current.value;
        props.updateNewSearchFilm(text);
    };

    let onTextAreaChange = () => {
        props.updateNewSearchFilmChange();
    };
    return (
        <div className={s.content}>
            <div className={s.header}>Найти фильм</div>
            <div className={s.search}>
                <textarea ref={newSearchFilm} onChange={onSearchChange}
                    onClick={onTextAreaChange} value={props.newSearchText} />
                <button onClick={addSearchFilm}>Найти</button>
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