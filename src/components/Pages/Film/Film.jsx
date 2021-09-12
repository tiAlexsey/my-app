import React from "react";
import s from './Film.module.css'
import About from "../../About/About";
import Comments from "../../Comments/Comments";

const Film = () => {
    return (
        <div className={s.content}>
            <About/>
            <Comments/>
        </div>
    )
}

export default Film;