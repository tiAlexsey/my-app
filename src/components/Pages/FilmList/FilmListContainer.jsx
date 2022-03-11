import { connect } from "react-redux";
import { setFilmAC, unViewedAC, viewedAC } from "redux/film-list-reducer";
import FilmList from "./FilmList";

let mapStateToProps = (state) => {
    return {
        film: state.filmListPage.film
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
const FilmListContainer = connect(mapStateToProps, mapDispatchToProps)(FilmList);

export default FilmListContainer;