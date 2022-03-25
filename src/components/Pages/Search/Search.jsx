import { Textarea } from "components/common/FormsControls/FormsControls";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "utils/validators/validators";
import s from './Search.module.css';
import SearchResult from "./SearchResult/SearchResult";

const maxLength50 = maxLengthCreator(50);

const Search = (props) => {

    let searchResultElement = props.searchResultPage.searchResult.map(sr => (
        <SearchResult text={sr.stringSearch} key={sr.id} />)
    );

    const onSubmit = (value) => {
        props.addSearch(value.newSearchText);
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
                <Field component={Textarea}
                    name='newSearchText'
                    placeholder='Найти фильм'
                    validate={[required ,maxLength50]}
                    />
            </div>
            <div>
                <button>Найти фильм</button>
            </div>
        </form>
    )
}


const SearchReduxForm = reduxForm({ form: 'commentForm' })(SearchForm)

export default Search;