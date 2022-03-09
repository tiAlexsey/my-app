import { connect } from "react-redux";
import { addCommenctActionCreator, updateNewCommenctTextActionCreator } from "redux/film-reducer";
import Comments from "./Comments";


let mapStateToProps = (state) => {
    return {
        comments: state.filmPage.comments,
        newCommentText: state.filmPage.newCommentText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addCommenctActionCreator: () => {
            dispatch(addCommenctActionCreator());
        },
        updateNewCommentAction: (text) => {
            dispatch(updateNewCommenctTextActionCreator(text));
        },
        updateNewCommenctActionCreator: () => {
            dispatch(updateNewCommenctTextActionCreator(''));
        }

    }
}
const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default CommentsContainer;