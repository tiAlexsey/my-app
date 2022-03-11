import { connect } from "react-redux";
import { addCommenctAC, updateNewCommenctTextAC } from "redux/film-reducer";
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
            dispatch(addCommenctAC());
        },
        updateNewCommentAction: (text) => {
            dispatch(updateNewCommenctTextAC(text));
        },
        updateNewCommenctActionCreator: () => {
            dispatch(updateNewCommenctTextAC(''));
        }
    }
}
const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default CommentsContainer;