import React from "react";
import { addCommenctActionCreator, updateNewCommenctTextActionCreator } from "redux/film-reducer";
import Comments from "./Comments";


const CommentsContainer = (props) => {

    let state = props.store.getState();

    let addComment = () => {
        props.store.dispatch(addCommenctActionCreator());
    };

    let onCommentChange = (text) => {
        props.store.dispatch(updateNewCommenctTextActionCreator(text));
    };

    let onTextAreaChange = () => {
        props.store.dispatch(updateNewCommenctTextActionCreator(''));
    };

    return (
        <Comments updateNewCommenctActionCreator={onTextAreaChange}
            updateNewCommentAction={onCommentChange}
            addCommenctActionCreator={addComment}
            comments={state.filmPage.comments}
            newCommentText={state.filmPage.newCommentText}
        />
    )
}

export default CommentsContainer;