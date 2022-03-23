import { connect } from "react-redux";
import { addSearch } from "redux/search-result-reducer";
import Search from "./Search";

let mapStateToProps = (state) => {
    return {
        searchResultPage: state.searchResultPage
    }
}

const SearchContainer = connect(mapStateToProps, {
    addSearch
})(Search);

export default SearchContainer;