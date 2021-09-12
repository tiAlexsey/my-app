import React from "react";
import s from './About.module.css';

const About = () => {
    return (
        <div>
            <div>
                <img
                    src='http://tibetanbuddhistencyclopedia.com/en/images/9/9a/48x768.jpg'/>
            </div>
            <div>
                Название фильма
            </div>
            <div className={s.content}>
                Описание
            </div>
            <div className={s.content}>
                Рейтинг
            </div>
        </div>
    )
}

export default About;