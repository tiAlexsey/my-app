import React from "react";
import s from './Comment.module.css';

const Comment = (props) => {
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
                <button>Like {props.like}</button>
                <button>Dislike {props.dislike}</button>
            </div>
        </div>
    );
}

export default Comment;