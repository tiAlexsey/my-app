const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT = 'UPDATE-NEW-COMMENT';
const WRITE_NEW_COMMENT = 'Введите новый комментарий';

const filmReducer = (state, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                commentId: 5,
                filmId: 1,
                name: 'katya',
                text: state.newCommentText,
                like: '0',
                dislike: '0',
                avatar: 'https://img1.goodfon.ru/original/320x240/6/ea/lisa-ryzhaia-morda-vzgliad-portret.jpg'
            };
            state.comments.push(newComment);
            state.newCommentText = WRITE_NEW_COMMENT;
            return state;
        case UPDATE_NEW_COMMENT:
            state.newCommentText = action.text;
            return state;
        default:
            return state;
    }

}

export const addCommenctActionCreator = () => ({ type: ADD_COMMENT })

export const updateNewCommenctActionCreator = (text) => ({ type: UPDATE_NEW_COMMENT, text: text })

export default filmReducer;