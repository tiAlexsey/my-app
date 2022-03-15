import axios from "axios";
import React from "react";
import s from './Description.module.css';


const Description = (props) => {
    return (
        <div className={s.content}>
            <div className={s.poster}>
                <img src={props.url} />
            </div>
            <div className={s.about}>
                <div className={s.header}>
                    <br />
                    {props.name}
                </div>
                <div className={s.description}>
                    {props.description}
                </div>
                <div className={s.rate}>
                    {props.rate}
                </div>
            </div>
        </div>
    )
}

export default Description;