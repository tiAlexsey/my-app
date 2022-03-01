import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

let store = {
    _state: {
        filmPage: {
            description:
            {
                filmId: 1,
                name: 'Начало',
                text: 'Аферисты проникают в чужие сны в целях промышленного шпионажа. Триллер Кристофера Нолана с Леонардо ДиКаприо',
                poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/a4a709fc-8dd9-41f4-8105-17d6e0b8bed0/2560x',
                rate: '8.6'
            },
            comments: [
                {
                    id: 1,
                    filmId: 1,
                    name: 'Пользователь #123',
                    text: 'Очень большой отзыв о фильме. \'Самое интересное что видел\'',
                    like: '15',
                    dislike: '2',
                    avatar: 'https://cs6.pikabu.ru/avatars/2097/x2097369-1271064885.png'
                }
                , {
                    id: 1,
                    filmId: 1,
                    name: 'ЕГООООР',
                    text: 'ЕГООООР',
                    like: '15',
                    dislike: '2',
                    avatar: 'https://cs6.pikabu.ru/avatars/2097/x2097369-1271064885.png'
                }
                , {
                    id: 2,
                    filmId: 1,
                    name: 'Гена Гиена',
                    text: 'Какой ужасный фильм',
                    like: '1',
                    dislike: '11',
                    avatar: 'https://mobimg.b-cdn.net/v3/fetch/4a/4ab4b2a2f3984e85c6b8325f972f65dc.jpeg'
                },
                {
                    id: 3,
                    filmId: 1,
                    name: 'Диппер-Разрушитель',
                    text: 'Бекон',
                    like: '28',
                    dislike: '8',
                    avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1639101/pub_611768146eab3f04defe25d7_6117687f7e37175eb6759ed8/scale_1200'
                },
                {
                    id: 4,
                    filmId: 1,
                    name: 'Катя',
                    text: 'я катя',
                    like: '20',
                    dislike: '0',
                    avatar: 'https://img1.goodfon.ru/original/320x240/6/ea/lisa-ryzhaia-morda-vzgliad-portret.jpg'
                }
            ],
            newCommentText: 'Katya - JopA'
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        if (action.type==='ADD-COMMENT'){
            let newComment = {
                id: 5,
                filmId: 1,
                name: 'katya',
                text: this._state.filmPage.newCommentText,
                like: '0',
                dislike: '0',
                avatar: 'https://img1.goodfon.ru/original/320x240/6/ea/lisa-ryzhaia-morda-vzgliad-portret.jpg'
            }
            this._state.filmPage.comments.push(newComment);
            this._state.filmPage.newCommentText = '';
            this._callSubscriber(this._state);
        } else if (action.type==='UPDATE-NEW-COMMENT'){
            debugger;
            this._state.filmPage.newCommentText = action.text;
            this._callSubscriber(this._state);
        }
    }
}

window.state = store;

export default store;