import { connect } from "react-redux";
import { addSearchFilm, changeNewSearchFilmText, updateNewSearchFilmText } from "redux/search-result-reducer";
import Search from "./Search";

let mapStateToProps = (state) => {
    return {
        searchResultPage: state.searchResultPage
    }
}

const SearchContainer = connect(mapStateToProps, { addSearchFilm, updateNewSearchFilmText, changeNewSearchFilmText })(Search);

export default SearchContainer;