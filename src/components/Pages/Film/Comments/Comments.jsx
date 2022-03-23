import Preloader from "components/common/Preloader/Preloader";
import React from "react";
import { Field, reduxForm } from "redux-form";
import Comment from "./Comment/Comment";
import s from './Comments.module.css';


const Comments = (props) => {

    if (!props.comments) {
        return <Preloader />
    }

    const onSubmit = (value) => {
        props.addComment(value.newCommentText);
        console.log(value.newCommentText);
    }

    let commentEllements = props.comments.map(c => (
        <Comment className={s.item} name={c.user.name} text={c.text} like={c.like}
            dislike={c.dislike} avatar={c.user.url} key={c.id}
        />)
    );

    return (
        <div className={s.content}>
            <CommentReduxForm onSubmit={onSubmit} />
            {commentEllements}
        </div>
    )
}

const CommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newCommentText' placeholder='Enter your comment' />
            </div>
            <div>
                <button>Добавить комментарий</button>
            </div>
        </form>
    )
}

const CommentReduxForm = reduxForm({ form: 'commentForm' })(CommentForm)

export default Comments;