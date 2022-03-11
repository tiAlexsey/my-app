import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import s from './FilmList.module.css'

const FilmList = (props) => {

    if (props.film.length === 0) {
        axios.get("https://localhost:7056/Film/list").then(response => {
            debugger;
            props.setFilm(response.data.item);
        });
    }

    return (
        <div className={s.content}> {
            props.film.map(f =>
                <div key={f.id} className={s.item}>
                    {/* first item */}
                    <span className={s.img}><img src={f.url} /></span>
                    {/* second item  */}
                    <div className={s.name}><NavLink to={'/Film/Item/' + f.id} >{f.name}</NavLink></div>
                    <div className={s.viewed}>
                        {f.viewed
                            ? <button onClick={() => { props.unViewed(f.id) }}>Viewed</button>
                            : <button onClick={() => { props.viewed(f.id) }}>Unviewed</button>
                        }
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default FilmList;