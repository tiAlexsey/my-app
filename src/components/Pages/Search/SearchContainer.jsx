import { connect } from "react-redux";
import { searchFilm } from "redux/search-result-reducer";
import Search from "./Search";

let mapStateToProps = (state) => {
    return {
        searchResultPage: state.searchResultPage
    }
}

const SearchContainer = connect(mapStateToProps, {
    searchFilm
})(Search);

export default SearchContainer;