import React from "react";
import { NavLink } from "react-router-dom";
import s from './SearchResult.module.css'

const SearchResult = (props) => {
    return (
        <div className={s.content}>
            <div key={props.id} className={s.item}>
                <span className={s.img}><img src={props.url} /></span>
                <div className={s.name}>
                    <NavLink to={'/Film/Item/' + props.id}>{props.name}</NavLink>
                </div>
            </div>
        </div>

    );
}

export default SearchResult