import Preloader from "components/common/Preloader/Preloader";
import React from "react";
import s from './Description.module.css';


const Description = (props) => {

    if (!props.film) {
        return <Preloader />
    }

    return (
        <div className={s.content}>
            <div className={s.poster}>
                <img src={props.film.url} />
            </div>
            <div className={s.about}>
                <div className={s.header}>
                    <br />
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