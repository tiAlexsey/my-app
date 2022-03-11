import axios from "axios";
import React from "react";
import s from './Description.module.css';

const Description = (props) => {
    if (props.film.comments.length === 0) {
        axios.get("https://localhost:7056/Film/item/1").then(response => {
            props.setFilm(response.data.item);
        });
    }

    return (
        <div className={s.content}>
            <div className={s.poster}>
                <img src={props.film.url} />
            </div>
            <div className={s.about}>
                <div className={s.header}>
                    {props.film.name}
                </div>
                <div className={s.description}>
                    {props.film.description}
                </div>
                <div className={s.rate}>
                    {props.film.rate}
                </div>
            </div>
        </div>
    )
}

export default Description;