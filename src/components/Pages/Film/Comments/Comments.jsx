import { Textarea } from "components/common/FormsControls/FormsControls";
import Preloader from "components/common/Preloader/Preloader";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "utils/validators/validators";
import Comment from "./Comment/Comment";
import s from './Comments.module.css';


const maxLength220 = maxLengthCreator(220);

const Comments = (props) => {
    if (!props.comments) {
        return <Preloader />
    }

    const onSubmit = (value) => {
        let comment = {
            filmId: parseInt(props.match.params.filmId, 10),
            text: value.text,
            userId: Math.floor(Math.random()*5)+1
        }
        console.log(comment);
        props.addComment(comment);
    }

    let commentEllements = props.comments.map(c => (
        <Comment name={c.user.name} text={c.text} like={c.like}
            dislike={c.dislike} avatar={c.user.url} key={c.id}
        />)
    );

    return (
        <div className={s.content}>
            <div className={s.newComment}>
                <CommentReduxForm onSubmit={onSubmit} />
            </div>
            <div className={s.existComments}>
                {commentEllements}
            </div>
        </div>
    )
}

const CommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength220]} component={Textarea} name='text' placeholder='Введите комментарий' />
            </div>
            <div>
                <button>Добавить комментарий</button>
            </div>
        </form>
    )
}

const CommentReduxForm = reduxForm({ form: 'commentForm' })(CommentForm)

export default Comments;