import React from "react";
import s from './Search.module.css';

let newSearchFilm = React.createRef();

let searchFilm = () => {
    let text=newSearchFilm.current.value;
    alert(text);
};

const Search = (props) => {
    return (
        <div className={s.content}>
            <div className={s.header}>Найти фильм</div>
            <div className={s.search}>
                <textarea ref={newSearchFilm}></textarea>
                <button onClick={searchFilm}>Найти</button>
            </div>
        </div>
    )
}

export default Search;