import React from "react";
import s from './Film.module.css'
import CommentsContainer from "./Comments/CommentsContainer";
import DescriptionContainer from "./Description/DescriptionContainer";

const Film = (props) => {
    debugger;
    return (
        <div className={s.content}>
            <DescriptionContainer store={props.store} />
            <CommentsContainer store={props.store} />
        </div>
    );
}

export default Film;