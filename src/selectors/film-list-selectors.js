export const getFilms = (state) => {
    return state.filmListPage.film;
}

export const getPageSize = (state) => {
    return state.filmListPage.pageSize;
}

export const getTotalFilmCount = (state) => {
    return state.filmListPage.totalFilmCount;
}
export const getCurrentPage = (state) => {
    return state.filmListPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.filmListPage.isFetching;
}

