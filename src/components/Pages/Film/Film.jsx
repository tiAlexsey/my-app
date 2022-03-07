import React from "react";
import s from './Film.module.css'
import Description from "./Description/Description";
import CommentsContainer from "./Comments/CommentsContainer";

const Film = (props) => {
    return (
        <div className={s.content}>
            <Description description={props.filmPage.description} />
            <CommentsContainer store={props.store} />
        </div>
    );
}

export default Film;