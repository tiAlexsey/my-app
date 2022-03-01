import React from "react";
import Comment from "./Comment/Comment";
import s from './Comments.module.css';

const Comments = (props) => {

    let commentsEllements = props.comments.map(с => (
        <Comment className={s.item} id={с.id} name={с.name} text={с.text} like={с.like}
            dislike={с.dislike} avatar={с.avatar}
        />)
    );

    let newCommentElement = React.createRef();

    let addComment = () => {
        props.addComment();
    };

    let onCommentChange = () => {
        let text = newCommentElement.current.value;
        props.updateNewComment(text);
    };

    return (
        <div className={s.content}>
            <div className={s.newComment}>
                <textarea onChange={onCommentChange} ref={newCommentElement} value={props.newCommentText} />
                <button onClick={addComment}>Добавить комментарий</button>
            </div>
            {commentsEllements}
        </div>
    )
}

export default Comments;