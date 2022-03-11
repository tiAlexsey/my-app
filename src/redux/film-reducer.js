const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT = 'UPDATE-NEW-COMMENT';
const WRITE_NEW_COMMENT = 'Введите новый комментарий';
const SET_FILM = 'SET_FILM'


let initialState = {
    comments: [],
    newCommentText: WRITE_NEW_COMMENT
};

const filmReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_COMMENT:
            let newComment = {
                id: 1,
                filmId: 1,
                text: state.newCommentText,
                userId: 1,
                like: 10,
                dislike: 2,
                user: {
                    id: 1,
                    name: "Катя",
                    url: "https://img1.goodfon.ru/original/320x240/6/ea/lisa-ryzhaia-morda-vzgliad-portret.jpg"
                }
            }
            return {
                ...state,
                comments: [...state.comments, newComment],
                newCommentText: WRITE_NEW_COMMENT
            }
        case UPDATE_NEW_COMMENT:
            return {
                ...state,
                newCommentText: action.text
            }
        case SET_FILM:
            return {
                ...state,
                id: action.item.id,
                name: action.item.name,
                url: action.item.url,
                description: action.item.description,
                rate: action.item.rate,
                comments: [...state.comments, ...action.item.comments]
            }
        default:
            return state;
    }

}

export const addCommenctAC = () => ({ type: ADD_COMMENT })

export const updateNewCommenctTextAC = (text) => ({ type: UPDATE_NEW_COMMENT, text: text })

export const setFilmAC = (item) => ({ type: SET_FILM, item })

export default filmReducer;