import React from "react";
import { connect } from "react-redux";
import Film from "./Film";

let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (state) => {
    return {

    }
}

const FilmContainer = connect(mapStateToProps,mapDispatchToProps)(Film);

export default FilmContainer;