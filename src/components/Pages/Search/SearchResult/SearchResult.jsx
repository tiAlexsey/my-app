import React from "react";
import s from './SearchResult.module.css'

const SearchResult = (props) => {
    return (
        <div>
            <div className={s.content}>
                {props.text}
            </div>
        </div>
    );
}

export default SearchResult