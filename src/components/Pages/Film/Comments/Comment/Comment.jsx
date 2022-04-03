import React from "react";
import s from './Comment.module.css';

const Comment = (props) => {
    let onLikeClick = () => {
        props.addLike(props.id, props.filmId);
    }
    let onDislikeClick = () => {
        props.addDislike(props.id, props.filmId);
    }

    return (
        <div className={s.item}>
            <div>
                {props.name}
            </div>
            <img src={props.avatar} />
            <div>
                {props.text}
            </div>
            <div className={s.rate}>
                <button onClick={onLikeClick}>Like {props.like}</button>
                <button onClick={onDislikeClick}>Dislike {props.dislike}</button>
            </div>
        </div>
    );
}

export default Comment;