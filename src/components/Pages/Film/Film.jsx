import React from "react";
import s from './Film.module.css'
import Description from "./Description/Description";
import Comments from "./Comments/Comments";

const Film = (props) => {
    return (
        <div className={s.content}>
            <Description description={props.filmPage.description}/>
            <Comments comments={props.filmPage.comments}/>
        </div>
    );
}

export default Film;