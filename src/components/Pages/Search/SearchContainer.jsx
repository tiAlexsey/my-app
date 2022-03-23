import { connect } from "react-redux";
import { addSearchFilm } from "redux/search-result-reducer";
import Search from "./Search";

let mapStateToProps = (state) => {
    return {
        searchResultPage: state.searchResultPage
    }
}

const SearchContainer = connect(mapStateToProps, {
    addSearchFilm
})(Search);

export default SearchContainer;