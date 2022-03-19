import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addCommenct, changeNewCommenctText, getFilm, updateNewCommentText } from "redux/film-reducer";
import Film from "./Film";

class FilmContainer extends React.Component {

    componentDidMount() {
        this.props.getFilm(this.props.match.params.filmId);
    }

    render() {
        return <Film {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    film: state.filmPage.film,
    comments: state.filmPage.comments,
    newCommentText: state.filmPage.newCommentText
})

let WithUrlDataContainerComponent = withRouter(FilmContainer);

export default connect(mapStateToProps, { addCommenct, updateNewCommentText, changeNewCommenctText, getFilm })(WithUrlDataContainerComponent);