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
            filmId: props.match.params.filmId,
            text: value.text,
            // генерируем случайного пользователя
            userId: Math.floor(Math.random() * 9) + 1
        }
        props.addComment(comment);
    }

    let commentEllements = props.comments.map(c => (
        <Comment addLike={props.addLike} addDislike={props.addDislike}
            name={c.user.name} text={c.text} like={c.like} id={c.id}
            dislike={c.dislike} avatar={c.user.url} key={c.id}
            filmId={props.film.id}
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