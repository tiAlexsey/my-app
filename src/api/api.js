import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:7056/Film/'
    //baseURL: 'http://192.168.0.190:5056/Film/'
});



export const filmAPI = {
    getFilms(currentPage = 1, pageSize = 10) {
        return instance.get(`list?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getFilm(filmId = 0) {
        return instance.get(`item/` + filmId).then(response => response.data)
    },
    searchFilm(text) {
        return instance.get(`list/search?name=` + text).then(response => response.data)
    }
}