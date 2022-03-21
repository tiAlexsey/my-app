import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFilms, setCurrentPage, unViewed, viewed } from 'redux/film-list-reducer';
import FilmList from './FilmList';

class FilmListContainer extends React.Component {
    componentDidMount() {
        this.props.getFilms(this.props.currentPage, this.props.pageSize);
    }

    onPageChangeed = (pageNumber => {
        this.props.getFilms(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber)

    })

    render() {
        return <>
            <FilmList totalFilmCount={this.props.totalFilmCount}
                pageSize={this.props.pageSize}
                viewed={this.props.viewed}
                unViewed={this.props.unViewed}
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

export default compose(
    connect(mapStateToProps, { viewed, unViewed, setCurrentPage, getFilms })
)(FilmListContainer);