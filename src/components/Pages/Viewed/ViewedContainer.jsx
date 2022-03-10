import { connect } from "react-redux";
import { setFilmAC, unViewedAC, viewedAC } from "redux/viewed-reducer";
import Viewed from "./Viewed";

let mapStateToProps = (state) => {
    return {
        film: state.viewedPage.film
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        viewed: (filmId) => {
            dispatch(viewedAC(filmId));
        },
        unViewed: (filmId) => {
            dispatch(unViewedAC(filmId));
        },
        setFilm: (film) => {
            dispatch(setFilmAC(film));
        }
    }
}
const ViewedConainer = connect(mapStateToProps, mapDispatchToProps)(Viewed);

export default ViewedConainer;