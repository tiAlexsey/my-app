import Preloader from "components/common/Preloader/Preloader";
import React from "react";
import Comment from "./Comment/Comment";
import s from './Comments.module.css';


const Comments = (props) => {

    if (!props.comments) {
        return <Preloader />
    }

    let newCommentElement = React.createRef();

    let commentEllements = props.comments.map(c => (
        <Comment className={s.item} name={c.user.name} text={c.text} like={c.like}
            dislike={c.dislike} avatar={c.user.url} key={c.id}
        />)
    );

    let addComment = () => {
        props.addCommenct();
    };

    let onCommentChange = () => {
        let text = newCommentElement.current.value;
        props.updateNewCommentText(text);
    };

    let onTextAreaChange = () => {
        props.changeNewCommenctText('');
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