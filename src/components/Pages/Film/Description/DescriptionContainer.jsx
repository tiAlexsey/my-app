import { connect } from "react-redux";
import { setFilmAC } from "redux/film-reducer";
import Description from "./Description";


let mapStateToProps = (state) => {
    return {
        film: state.filmPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setFilm: (film) => {
            dispatch(setFilmAC(film));
        }
    }
}

const DescriptionConainer = connect(mapStateToProps, mapDispatchToProps)(Description);


export default DescriptionConainer;