import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './Search.module.css';
import SearchResult from "./SearchResult/SearchResult";


const Search = (props) => {

    let searchResultElement = props.searchResultPage.searchResult.map(sr => (
        <SearchResult text={sr.stringSearch} key={sr.id} />)
    );

    const onSubmit = (value) => {
        props.addSearchFilm(value.newCommentText);
        console.log(value.newCommentText);
    }

    return (
        <div className={s.content}>
            <div className={s.search}>
                <SearchReduxForm onSubmit={onSubmit} />
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

const SearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newCommentText' placeholder='Enter your comment' />
            </div>
            <div>
                <button>Найти фильм</button>
            </div>
        </form>
    )
}


const SearchReduxForm = reduxForm({ form: 'commentForm' })(SearchForm)

export default Search;