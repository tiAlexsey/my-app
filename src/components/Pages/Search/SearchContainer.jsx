import { connect } from "react-redux";
import { addSearchFilmActionCreator, updateNewSearchFilmTextActionCreator } from "redux/search-result-reducer";
import Search from "./Search";

let mapStateToProps = (state) => {
    return {
        searchResultPage: state.searchResultPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewSearchFilmChange: () => {
            dispatch(updateNewSearchFilmTextActionCreator(''));
        },
        updateNewSearchFilm: (text) => {
            dispatch(updateNewSearchFilmTextActionCreator(text));
        },
        addSearchFilm: () => {
            dispatch(addSearchFilmActionCreator());
        }
    }
}
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;