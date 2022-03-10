import axios from "axios";
import React from "react";
import s from './Viewed.module.css'

const Viewed = (props) => {

    if (props.film.length === 0) {
        axios.get("https://localhost:7056/Film/list").then(response => {
            props.setFilm(response.data);
        });
    }

    return (
        <div className={s.content}>
            {
                props.film.map(f =>
                    <div key={f.id} className={s.item}>
                        {/* first item */}
                        <span className={s.img}>
                            <img src={f.url} />
                        </span>
                        {/* second item  */}
                        <div className={s.name}><a href={"FilmPage/"+f.id} >{f.name}</a></div>
                        <div className={s.viewed}>
                            {f.viewed
                                ? <button onClick={() => { props.unViewed(f.id) }}>Viewed</button>
                                : <button onClick={() => { props.viewed(f.id) }}>Unviewed</button>
                            }
                        </div>

                    </div>)
            }
        </div>
    )
}

export default Viewed;