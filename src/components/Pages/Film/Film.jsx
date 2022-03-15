import React from "react";
import s from './Film.module.css'
import CommentsContainer from "./Comments/CommentsContainer";
import Description from "./Description/Description";
import Comments from "./Comments/Comments";

const Film = (props) => {
    return (
        <div className={s.content}>
            <Description {...props} />
            {/* <Comments {...props} /> */}
            <CommentsContainer store={props.store} />
        </div>
    );
}

export default Film;

