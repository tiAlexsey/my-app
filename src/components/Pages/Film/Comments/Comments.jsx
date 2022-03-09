import React from "react";
import Comment from "./Comment/Comment";
import s from './Comments.module.css';


const Comments = (props) => {

    let commentEllements = props.comments.map(c => (
        <Comment className={s.item} id={c.commentId} name={c.name} text={c.text} like={c.like}
            dislike={c.dislike} avatar={c.avatar} key={c.id}
        />)
    );

    let newCommentElement = React.createRef();

    let addComment = () => {
        props.addCommenctActionCreator();
    };

    let onCommentChange = () => {
        let text = newCommentElement.current.value;
        props.updateNewCommentAction(text);
    };

    let onTextAreaChange = () => {
        props.updateNewCommenctActionCreator('');
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