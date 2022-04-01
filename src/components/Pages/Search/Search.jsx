import { Textarea } from "components/common/FormsControls/FormsControls";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "utils/validators/validators";
import s from './Search.module.css';
import SearchResult from "./SearchResult/SearchResult";

const Search = (props) => {

    const onSubmit = (value) => {
        props.searchFilm(value.searchFilms);
    }

    let searchResultElement = props.searchResultPage.searchResult.map(e => (
        <SearchResult url={e.url} name={e.name} key={e.id} id={e.id}/>)
    );

    return (
        <div className={s.content}>
            <div>
                <SearchReduxForm onSubmit={onSubmit} />
            </div>
            <div className={s.resultForm}>
                {searchResultElement}
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const SearchForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.SearchForm}>
            <div className={s.SearchFormTextArea}>
                <Field component={Textarea}
                    name='searchFilms'
                    placeholder='Найти фильм'
                    validate={[required, maxLength50]}
                />
            </div>
            <div className={s.SearchFormButton}>
                <button>Найти фильм</button>
            </div>
        </form>
    )
}

const SearchReduxForm = reduxForm({ form: 'searchForm' })(SearchForm)

export default Search;