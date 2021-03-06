import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:7056/Film/'
    //baseURL: 'http://192.168.0.190:5056/Film/'
});

export const filmAPI = {
    getFilms(currentPage = 1, pageSize = 10) {
        return instance.get(`list?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getFilmsCount() {
        return instance.get(`count`).then(response => response.data)
    },
    getFilm(filmId = 0) {
        return instance.get(`item/` + filmId).then(response => response.data)
    },
    searchFilm(text) {
        return instance.get(`search?name=` + text).then(response => response.data)
    },
    addComment(comment) {
        return instance.post(`comment/add`, {
            filmId: comment.filmId,
            text: comment.text,
            userId: comment.userId
        }).then(response =>response.data)
    },
    addLike(commentID){
        debugger;
        return instance.post(`comment/like?idComment=`+commentID+`&type=true`);
    }, 
    addDislike(commentID) {
        return instance.post(`comment/dislike?idComment=`+commentID+`&type=true`);
    }
}