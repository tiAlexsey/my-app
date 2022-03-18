import axios from 'axios';

export const getFilms = (currentPage = 1,pageSize = 10) => {
    return axios.get(`https://192.168.0.190:7056/Film/list?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const getFilm = (filmId = 0) => {
    return axios.get(`https://192.168.0.190:7056/Film/item/` + filmId).then(response => response.data)
}