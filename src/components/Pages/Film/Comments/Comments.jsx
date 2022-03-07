import React from "react";
import { addCommenctActionCreator, updateNewCommenctActionCreator } from "redux/film-reducer";
import Comment from "./Comment/Comment";
import s from './Comments.module.css';


const Comments = (props) => {

    let commentEllements = props.comments.map(с => (
        <Comment className={s.item} id={с.commentId} name={с.name} text={с.text} like={с.like}
            dislike={с.dislike} avatar={с.avatar}
        />)
    );

    let newCommentElement = React.createRef();

    let addComment = () => {
        props.dispatch(addCommenctActionCreator());
    };

    let onCommentChange = () => {
        let text = newCommentElement.current.value;
        props.dispatch(updateNewCommenctActionCreator(text));
    };

    let onTextAreaChange = () => {
        let text = '';
        props.dispatch(updateNewCommenctActionCreator(text));
    };

    return (
        <div className={s.content}>
            <div className={s.newComment}>
                <textarea onClick={onTextAreaChange} 
                onChange={onCommentChange} ref={newCommentElement} value={props.newCommentText} />
                <button onClick={addComment}>Добавить комментарий</button>
            </div>
            {commentEllements}
        </div>
    )
}

export default Comments;