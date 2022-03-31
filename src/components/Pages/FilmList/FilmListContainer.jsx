import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestFilms, setCurrentPage, unViewed, viewed } from 'redux/film-list-reducer';
import { getCurrentPage, getFilms, getIsFetching, getPageSize, getTotalFilmCount } from '..//..//..//selectors/film-list-selectors';
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
        film: getFilms(state),
        pageSize: getPageSize(state),
        totalFilmCount: getTotalFilmCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state)
    }
}
export default compose(
    connect(mapStateToProps, { viewed, unViewed, setCurrentPage, getFilms: requestFilms })
)(FilmListContainer);