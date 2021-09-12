import React from "react";
import Comment from "./Comment/Comment";
import s from './Comments.module.css';

const Comments = () => {
    return (
        <div>
            <div className={s.item}>
                <textarea></textarea>
                <button>Добавить комментарий</button>
            </div>
            <Comment name={'Пользователь #123'} text={'Очень большой отзыв о фильме. ' +
            'Самое интересное что видел'} like={'15'} dislike={'2'}/>
            <Comment className={s.item} name={'Гена Гиена'} text={'Какой ужасный фильм'} like={'1'} dislike={'11'}/>
            <Comment className={s.item} name={'Диппер-Разрушитель'} text={'Бекон'} like={'28'} dislike={'8'}/>
        </div>
    )
}

export default Comments;