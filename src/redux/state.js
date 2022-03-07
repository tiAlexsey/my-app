import filmReducer from "./film-reducer";
import searchResultReducer from "./search-result-reducer";

const WRITE_NEW_COMMENT = 'Введите новый комментарий';
const WRITE_NEW_SEARCH_FILM_TEXT = 'Введите название фильма для поиска';


let store = {
    _state: {
        searchResultPage: {
            searchResult: [{
                userId: 1,
                searchId: 1,
                stringSearch: "Начало",
                filmId: 1
            }, {
                userId: 1,
                searchId: 2,
                stringSearch: "А кто это сделал",
                filmId: 2
            }],
            newSearchText: WRITE_NEW_SEARCH_FILM_TEXT
        },
        filmPage: {
            description: {
                filmId: 1,
                name: 'Начало',
                text: 'Аферисты проникают в чужие сны в целях промышленного шпионажа. Триллер Кристофера Нолана с Леонардо ДиКаприо',
                poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a4a709fc-8dd9-41f4-8105-17d6e0b8bed0/2560x',
                rate: '8.6'
            },
            comments: [{
                commentId: 1,
                filmId: 1,
                name: 'Пользователь #123',
                text: 'Очень большой отзыв о фильме. \'Самое интересное что видел\'',
                like: '15',
                dislike: '2',
                avatar: 'https://cs6.pikabu.ru/avatars/2097/x2097369-1271064885.png'
            }, {
                commentId: 1,
                filmId: 1,
                name: 'ЕГООООР',
                text: 'ЕГООООР',
                like: '15',
                dislike: '2',
                avatar: 'https://cs6.pikabu.ru/avatars/2097/x2097369-1271064885.png'
            }, {
                commentId: 2,
                filmId: 1,
                name: 'Гена Гиена',
                text: 'Какой ужасный фильм',
                like: '1',
                dislike: '11',
                avatar: 'https://mobimg.b-cdn.net/v3/fetch/4a/4ab4b2a2f3984e85c6b8325f972f65dc.jpeg'
            },
            {
                commentId: 3,
                filmId: 1,
                name: 'Диппер-Разрушитель',
                text: 'Бекон',
                like: '28',
                dislike: '8',
                avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1639101/pub_611768146eab3f04defe25d7_6117687f7e37175eb6759ed8/scale_1200'
            },
            {
                commentId: 4,
                filmId: 1,
                name: 'Катя',
                text: 'я катя',
                like: '20',
                dislike: '0',
                avatar: 'https://img1.goodfon.ru/original/320x240/6/ea/lisa-ryzhaia-morda-vzgliad-portret.jpg'
            }
            ],
            newCommentText: WRITE_NEW_COMMENT
        }
    },
    _callSubscriber(a) {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.filmPage = filmReducer(this._state.filmPage, action);
        this._state.searchResultPage = searchResultReducer(this._state.searchResultPage, action);

        this._callSubscriber(this._state);
        
    }
}

// @ts-ignore
window.state = store;

export default store;