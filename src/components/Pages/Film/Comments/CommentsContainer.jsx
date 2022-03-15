import { connect } from "react-redux";
import { addCommenct, updateNewCommenctText } from "redux/film-reducer";
import Comments from "./Comments";


let mapStateToProps = (state) => {
    return {
        comments: state.filmPage.comments,
        newCommentText: state.filmPage.newCommentText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addCommenct: () => {
            dispatch(addCommenct());
        },
        updateNewCommentText: (text) => {
            dispatch(updateNewCommenctText(text));
        },
        updateNewCommenct: () => {
            dispatch(updateNewCommenctText(''));
        }
    }
}
const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default CommentsContainer;