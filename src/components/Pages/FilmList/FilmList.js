import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './FilmList.module.css'
import Preeloader from 'components/common/Preloader/Preloader';

let FilmList = (props) => {
    let pagesCount = Math.ceil(props.totalFilmCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.content}>
            {props.isFetching ? <Preeloader /> : null}
            {pages.map(p => {
                return <span className={(props.currentPage === p) ? s.selectedPage : s.none}
                    key={p}
                    onClick={(e) => { props.onPageChangeed(p); }}>{p}
                </span>
            })}
            {props.film.map(f =>
                <div key={f.id} className={s.item}>
                    <span className={s.img}><img src={f.url} /></span>
                    <div className={s.name}>
                        <NavLink to={'/Film/Item/' + f.id}>{f.name}</NavLink>
                    </div>
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
export default FilmList