let rerenderEntireTree = () => {
    console.log('State changed');
};

let state = {
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
}

window.state = state;

export const addComment = () => {
    let newComment = {
        id: 5,
        filmId: 1,
        name: 'katya',
        text: state.filmPage.newCommentText,
        like: '0',
        dislike: '0',
        avatar: 'https://img1.goodfon.ru/original/320x240/6/ea/lisa-ryzhaia-morda-vzgliad-portret.jpg'
    }
    state.filmPage.comments.push(newComment);
    state.filmPage.newCommentText = '';
    rerenderEntireTree(state);
};

export const updateNewComment = (text) => {
    state.filmPage.newCommentText = text;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;