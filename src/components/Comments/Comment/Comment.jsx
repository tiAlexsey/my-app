import React from "react";
import s from './Comment.module.css';

const Comment = (props) => {
    return (
        <div className={s.item}>
            <div>{props.name}</div>
            <img src='https://cs6.pikabu.ru/avatars/2097/x2097369-1271064885.png'/>
            <div>
                {props.text}
            </div>
            <div>
                <button>Like {props.like}</button>
                <button>Dislike {props.dislike}</button>
            </div>
        </div>
    )
}

export default Comment;