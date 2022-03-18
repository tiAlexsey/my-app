import { getFilms } from 'api/api';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setFilm, setTotalFilmCount, toggleIsFetching, unViewed, viewed } from 'redux/film-list-reducer';
import FilmList from './FilmList';

class FilmListContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        getFilms(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setFilm(data.item);
            this.props.setTotalFilmCount(data.total)
        });
    }

    onPageChangeed = (pageNumber => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        getFilms(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setFilm(data.item);
        });
    })

    render() {
        return <>
            <FilmList totalFilmCount={this.props.totalFilmCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChangeed={this.onPageChangeed}
                film={this.props.film}
                isFetching={this.props.isFetching}
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