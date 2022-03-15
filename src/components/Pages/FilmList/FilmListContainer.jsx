import axios from 'axios';
import Preeloader from 'components/common/Preloader/Preloader';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setFilm, setTotalFilmCount, toggleIsFetching, unViewed, viewed } from 'redux/film-list-reducer';
import FilmList from './FilmList';

class FilmListContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://localhost:7056/Film/list?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setFilm(response.data.item);
            this.props.setTotalFilmCount(response.data.total)
        });
    }

    onPageChangeed = (pageNumber => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://localhost:7056/Film/list?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setFilm(response.data.item);
        });
    })

    render() {
        return <>
            {this.props.isFetching ? <Preeloader /> : null}
            <FilmList totalFilmCount={this.props.totalFilmCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChangeed={this.onPageChangeed}
                film={this.props.film}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        film: state.filmListPage.film,
        pageSize: state.filmListPage.pageSize,
        totalFilmCount: state.filmListPage.totalFilmCount,
        currentPage: state.filmListPage.currentPage,
        isFetching: state.filmListPage.isFetching
    }
}


export default connect(mapStateToProps, {
    viewed, unViewed, setFilm, setCurrentPage, setTotalFilmCount, toggleIsFetching
})(FilmListContainer);