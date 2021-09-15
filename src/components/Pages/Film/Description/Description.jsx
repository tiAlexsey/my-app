import React from "react";
import s from './Description.module.css';

const Description = (props) => {
    return (
        <div>
            <div className={s.content}>
                <div className={s.poster}>
                    <img src='http://tibetanbuddhistencyclopedia.com/en/images/9/9a/48x768.jpg'/>
                </div>
                <div className={s.about}>
                    <div className={s.header}>Название фильма</div>
                    <div className={s.description}>Описание</div>
                    <div className={s.rate}> Рейтинг</div>
                </div>
            </div>
        </div>
    )
}

export default Description;