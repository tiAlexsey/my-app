import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setCurrentPageAC, setFilmAC, setTotalFilmCountAC, unViewedAC, viewedAC } from "redux/film-list-reducer";
import FilmList from "./FilmList";

class FilmListContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://localhost:7056/Film/list?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            debugger;
            this.props.setFilm(response.data.item);
            this.props.setTotalFilmCount(response.data.total)
        });
    }

    onPageChangeed = (pageNumber => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://localhost:7056/Film/list?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            debugger;
            this.props.setFilm(response.data.item);
        });
    })

    render() {
        return <FilmList totalFilmCount={this.props.totalFilmCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChangeed={this.onPageChangeed}
            film={this.props.film}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        film: state.filmListPage.film,
        pageSize: state.filmListPage.pageSize,
        totalFilmCount: state.filmListPage.totalFilmCount,
        currentPage: state.filmListPage.currentPage
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
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalFilmCount: (totalCount) => {
            dispatch(setTotalFilmCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmListContainer);