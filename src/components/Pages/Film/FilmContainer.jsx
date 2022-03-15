import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { addCommenct, setFilm, updateNewCommenctText } from "redux/film-reducer";
import Film from "./Film";

class FilmContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://localhost:7056/Film/item/1`).then(response => {
            debugger;
            this.props.setFilm(response.data.item);
        })
    };

    render() {
        debugger;
        return <Film {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    description: state.filmPage.description,
    id: state.filmPage.id,
    name: state.filmPage.name,
    rate: state.filmPage.rate,
    url: state.filmPage.url,
    comments: state.filmPage.comments,
    newCommentText: state.filmPage.newCommentText
})

let mapDispatchToProps = (dispatch) => {
    return {
        setFilm
        // ,
        // addCommenct,
        // updateNewCommentText: (text) => {
        //     dispatch(updateNewCommenctText(text));
        // },
        // updateNewCommenct: () => {
        //     dispatch(updateNewCommenctText(''));
        // }
    }
}

export default connect(mapStateToProps, {setFilm})(FilmContainer);