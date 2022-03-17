import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addCommenct, changeNewCommenctText, setFilm, updateNewCommentText } from "redux/film-reducer";
import Film from "./Film";

class FilmContainer extends React.Component {

    componentDidMount() {
        let filmId = this.props.match.params.filmId;
        this.props.setFilm({film: null, comments: []});
        axios.get(`https://192.168.0.190:7056/Film/item/` + filmId).then(response => {
            this.props.setFilm(response.data.item);
        })
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

export default connect(mapStateToProps, { setFilm, addCommenct, updateNewCommentText, changeNewCommenctText })(WithUrlDataContainerComponent);